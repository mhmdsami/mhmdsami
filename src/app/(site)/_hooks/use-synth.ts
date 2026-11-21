"use client";

import { type RefObject, useEffect, useMemo, useRef, useState } from "react";
import type { ContributionDay } from "@/lib/contributions";
import { buildTimeline } from "@/lib/timeline";

export function useSynth(days: Array<ContributionDay>, max: number, playhead: RefObject<HTMLDivElement | null>) {
  const audio = useRef<AudioContext | null>(null);
  const master = useRef<GainNode | null>(null);
  const noise = useRef<AudioBuffer | null>(null);
  const timer = useRef<number | null>(null);
  const step = useRef(0);
  const nextTime = useRef(0);
  const [playing, setPlaying] = useState(false);
  const timeline = useMemo(() => buildTimeline(days, max), [days, max]);
  const timelineRef = useRef(timeline);

  useEffect(() => {
    timelineRef.current = timeline;
  }, [timeline]);

  const stop = () => {
    if (timer.current !== null) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
    setPlaying(false);
    if (playhead.current) playhead.current.style.opacity = "0";
    void audio.current?.suspend();
  };

  const playDrum = (row: number, time: number, velocity: number) => {
    const context = audio.current;
    const output = master.current;
    const noiseBuffer = noise.current;
    if (!context || !output || !noiseBuffer) return;

    const hitGain = (value: number, decay: number) => {
      const gain = context.createGain();
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.exponentialRampToValueAtTime(value * velocity, time + 0.004);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + decay);
      gain.connect(output);
      return gain;
    };

    const noiseHit = (value: number, decay: number, type: BiquadFilterType, frequency: number) => {
      const source = context.createBufferSource();
      const filter = context.createBiquadFilter();
      source.buffer = noiseBuffer;
      filter.type = type;
      filter.frequency.value = frequency;
      source.connect(filter);
      filter.connect(hitGain(value, decay));
      source.start(time);
      source.stop(time + decay + 0.02);
    };

    const toneHit = (value: number, decay: number, start: number, end: number) => {
      const oscillator = context.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(start, time);
      oscillator.frequency.exponentialRampToValueAtTime(end, time + decay);
      oscillator.connect(hitGain(value, decay));
      oscillator.start(time);
      oscillator.stop(time + decay + 0.02);
    };

    switch (row) {
      case 0:
        noiseHit(0.12, 0.04, "highpass", 8000);
        break;
      case 1:
        noiseHit(0.14, 0.14, "highpass", 6000);
        break;
      case 2:
        noiseHit(0.3, 0.15, "bandpass", 1800);
        toneHit(0.12, 0.08, 190, 140);
        break;
      case 3:
        noiseHit(0.26, 0.1, "bandpass", 1200);
        break;
      case 4:
        toneHit(0.38, 0.18, 240, 130);
        break;
      case 5:
        toneHit(0.42, 0.22, 160, 85);
        break;
      default:
        toneHit(0.62, 0.2, 150, 45);
        break;
    }
  };

  const playStep = (index: number, time: number) => {
    const { steps } = timelineRef.current;
    const current = steps[index];
    if (!current) return;

    if (playhead.current) {
      playhead.current.style.left = `${((index + 0.5) / steps.length) * 100}%`;
    }

    for (const hit of current.hits) playDrum(hit.row, time, hit.velocity);
  };

  const schedule = () => {
    const context = audio.current;
    if (!context) return;
    const horizon = context.currentTime + 0.12;
    while (nextTime.current < horizon) {
      playStep(step.current, nextTime.current);
      nextTime.current += 60 / 96 / 4;
      step.current = (step.current + 1) % timelineRef.current.steps.length;
    }
    timer.current = window.setTimeout(schedule, 25);
  };

  const start = async () => {
    if (playing) return;
    const Context = window.AudioContext;
    if (!Context) return;
    if (!audio.current) {
      const context = new Context();
      const output = context.createGain();
      const buffer = context.createBuffer(1, context.sampleRate * 0.4, context.sampleRate);
      const samples = buffer.getChannelData(0);
      for (let index = 0; index < samples.length; index += 1) samples[index] = Math.random() * 2 - 1;
      const compressor = context.createDynamicsCompressor();
      compressor.threshold.value = -16;
      compressor.knee.value = 12;
      compressor.ratio.value = 6;
      compressor.attack.value = 0.003;
      compressor.release.value = 0.25;

      output.gain.value = 0.62;
      output.connect(compressor);
      compressor.connect(context.destination);
      audio.current = context;
      master.current = output;
      noise.current = buffer;
    }
    await audio.current.resume();
    step.current = 0;
    nextTime.current = audio.current.currentTime + 0.08;
    setPlaying(true);
    if (playhead.current) playhead.current.style.opacity = "1";
    schedule();
  };

  const toggle = () => {
    if (playing) stop();
    else void start();
  };

  const actions = useRef({ start, stop, toggle });

  useEffect(() => {
    actions.current = { start, stop, toggle };
  });

  useEffect(() => {
    const handler = (event: Event) => {
      const action = (event as CustomEvent<"on" | "off" | "toggle">).detail;
      if (action === "on") void actions.current.start();
      else if (action === "off") actions.current.stop();
      else actions.current.toggle();
    };
    window.addEventListener("activity:synth", handler);
    return () => window.removeEventListener("activity:synth", handler);
  }, []);

  useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
      void audio.current?.close();
    };
  }, []);

  return { playing, toggle };
}
