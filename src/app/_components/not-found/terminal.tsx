"use client";

import { type FormEvent, useRef } from "react";
import { Terminal, useTerminal } from "@/app/_components/terminal";

export default function NotFoundTerminal() {
  const { lines, value, setValue, submit, commands } = useTerminal({ welcome: "nothing here. try `man`." });
  const outputRef = useRef<HTMLDivElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    submit(event);
    window.requestAnimationFrame(() => {
      const output = outputRef.current;
      if (output) output.scrollTop = output.scrollHeight;
    });
  };

  return (
    <div className="mt-8 h-56 overflow-hidden rounded-md border bg-surface-1 font-mono text-xs leading-5">
      <div ref={outputRef} className="h-full overflow-y-auto px-4 py-3">
        <Terminal
          lines={lines}
          value={value}
          onChange={setValue}
          onSubmit={onSubmit}
          commands={commands}
          label="404 terminal command"
        />
      </div>
    </div>
  );
}
