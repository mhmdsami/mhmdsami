const BACK = { x: 92, y: 50 };
const U = { x: 72, y: 36 };
const V = { x: -56, y: 28 };

function at(s: number, t: number) {
  return { x: BACK.x + U.x * s + V.x * t, y: BACK.y + U.y * s + V.y * t };
}

function plane(points: Array<[number, number]>) {
  return points
    .map(([s, t]) => {
      const { x, y } = at(s, t);
      return `${x} ${y}`;
    })
    .join(" L");
}

const PADS: Array<[number, number, boolean]> = [];
for (let row = 0; row < 4; row += 1) {
  for (let column = 0; column < 4; column += 1) {
    PADS.push([0.12 + column * 0.1, 0.18 + row * 0.15, (row + column) % 5 === 0 || (row === 3 && column === 2)]);
  }
}

const STEPS = Array.from({ length: 8 }, (_, index) => at(0.12 + index * 0.062, 0.07));
const KNOBS = [0.2, 0.42, 0.64, 0.86].map((t) => at(0.7, t));

export function SynthArt({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="28 42 144 90" className={className}>
      <g strokeWidth="0.85" strokeLinejoin="round">
        <path
          d={`M${plane([
            [0, 0],
            [1, 0],
            [1, 1],
            [0, 1],
          ])} Z`}
          fill="currentColor"
          opacity="0.05"
        />
        <path
          d={`M${plane([
            [1, 0],
            [1, 1],
          ])} L${at(1, 1).x} ${at(1, 1).y + 11} L${at(1, 0).x} ${at(1, 0).y + 11} Z`}
          fill="currentColor"
          opacity="0.09"
        />
        <path
          d={`M${plane([
            [0, 1],
            [1, 1],
          ])} L${at(1, 1).x} ${at(1, 1).y + 11} L${at(0, 1).x} ${at(0, 1).y + 11} Z`}
          fill="currentColor"
          opacity="0.03"
        />

        <g fill="currentColor" stroke="currentColor">
          {STEPS.map(({ x, y }, index) => (
            <ellipse
              key={`step-${index}`}
              cx={x}
              cy={y}
              rx="1.7"
              ry="0.9"
              fillOpacity={index === 2 ? 0.55 : 0.16}
              strokeOpacity={index === 2 ? 0.6 : 0.2}
            />
          ))}

          {PADS.map(([s, t, lit]) => (
            <path
              key={`pad-${s}-${t}`}
              d={`M${plane([
                [s - 0.032, t - 0.045],
                [s + 0.032, t - 0.045],
                [s + 0.032, t + 0.045],
                [s - 0.032, t + 0.045],
              ])} Z`}
              fillOpacity={lit ? 0.32 : 0.08}
              strokeOpacity={lit ? 0.55 : 0.22}
            />
          ))}

          <path
            d={`M${plane([
              [0.1, 0.78],
              [0.42, 0.78],
              [0.42, 0.93],
              [0.1, 0.93],
            ])} Z`}
            fillOpacity="0.04"
            strokeOpacity="0.26"
          />
          <path
            d={`M${plane([
              [0.13, 0.855],
              [0.17, 0.825],
              [0.21, 0.89],
              [0.25, 0.82],
              [0.29, 0.9],
              [0.33, 0.84],
              [0.37, 0.87],
            ])}`}
            fill="none"
            strokeOpacity="0.38"
          />

          {KNOBS.map(({ x, y }, index) => (
            <g key={`knob-${index}`}>
              <ellipse cx={x} cy={y} rx="4.6" ry="2.5" fillOpacity="0.16" strokeOpacity="0.4" />
              <ellipse cx={x} cy={y - 2.4} rx="4.6" ry="2.5" fillOpacity="0.1" strokeOpacity="0.32" />
              <ellipse cx={x} cy={y - 2.4} rx="1.3" ry="0.7" fillOpacity="0.5" strokeOpacity="0" />
              <path d={`M${x} ${y - 2.4} L${x} ${y - 4.3}`} fill="none" strokeOpacity="0.45" />
            </g>
          ))}
        </g>

        <g fill="none" stroke="currentColor" strokeOpacity="0.34">
          <path
            d={`M${plane([
              [0, 0],
              [1, 0],
              [1, 1],
              [0, 1],
            ])} Z`}
          />
          <path
            d={`M${at(0, 1).x} ${at(0, 1).y} L${at(0, 1).x} ${at(0, 1).y + 11} L${at(1, 1).x} ${at(1, 1).y + 11} L${at(1, 1).x} ${at(1, 1).y}`}
          />
          <path
            d={`M${at(1, 0).x} ${at(1, 0).y} L${at(1, 0).x} ${at(1, 0).y + 11} L${at(1, 1).x} ${at(1, 1).y + 11}`}
          />
        </g>
      </g>
    </svg>
  );
}
