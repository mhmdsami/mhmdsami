interface BoxProps {
  x: number;
  y: number;
  w: number;
  d: number;
  h: number;
}

function Box({ x, y, w, d, h }: BoxProps) {
  return (
    <g>
      <path
        d={`M${x - w} ${y - h} L${x} ${y - h + d} L${x} ${y + d} L${x - w} ${y} Z`}
        fill="currentColor"
        opacity="0.22"
      />
      <path
        d={`M${x + w} ${y - h} L${x} ${y - h + d} L${x} ${y + d} L${x + w} ${y} Z`}
        fill="currentColor"
        opacity="0.1"
      />
      <path
        d={`M${x} ${y - h - d} L${x + w} ${y - h} L${x} ${y - h + d} L${x - w} ${y - h} Z`}
        fill="currentColor"
        opacity="0.42"
      />
    </g>
  );
}

const STARS: Array<[number, number]> = [
  [46, 58],
  [88, 38],
  [214, 42],
  [230, 132],
  [62, 150],
  [166, 168],
];

export default function NotFoundArt({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 260 200" className={className}>
      <g strokeWidth="0.9" strokeLinejoin="round">
        <ellipse
          className="not-found-orbit"
          cx="122"
          cy="112"
          rx="88"
          ry="34"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.28"
          strokeDasharray="2 7"
          strokeLinecap="round"
        />

        <path
          className="not-found-trail"
          d="M150 96 Q168 82 180 74"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.22"
          strokeDasharray="2 6"
          strokeLinecap="round"
        />

        <g className="not-found-drift">
          <g className="not-found-spin">
            <path d="M172 67 L150 56 L150 63 L172 74 Z" fill="currentColor" opacity="0.12" />
            <path d="M200 67 L222 56 L222 63 L200 74 Z" fill="currentColor" opacity="0.12" />
            <g fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8">
              <path d="M172 67 L150 56 L150 63 L172 74 Z" />
              <path d="M200 67 L222 56 L222 63 L200 74 Z" />
              <path d="M157 59.5 L157 66.5" />
              <path d="M165 63.5 L165 70.5" />
              <path d="M207 59.5 L207 66.5" />
              <path d="M215 63.5 L215 70.5" />
            </g>

            <Box x={186} y={78} w={13} d={6.5} h={16} />

            <g fill="none" stroke="currentColor" strokeOpacity="0.4">
              <path d="M186 55 L186 46" strokeWidth="1" />
              <path d="M178 48 Q186 41 194 48" strokeWidth="0.9" />
              <path d="M181 53 Q186 48 191 53" strokeWidth="0.8" strokeOpacity="0.25" />
            </g>
            <circle className="not-found-beacon" cx="186" cy="43" r="1.6" fill="currentColor" opacity="0.5" />

            <g fill="none" stroke="currentColor" strokeOpacity="0.38">
              <path d="M186 55 L199 61.5 L186 68 L173 61.5 Z" />
              <path d="M173 61.5 L173 79.5 L186 86 L186 68" />
              <path d="M199 61.5 L199 79.5 L186 86" />
            </g>
          </g>
        </g>

        <g stroke="currentColor" strokeOpacity="0.35" strokeLinecap="round">
          {STARS.map(([x, y], index) => (
            <g key={`${x}-${y}`} className="not-found-star" style={{ animationDelay: `${index * 0.7}s` }}>
              <path d={`M${x - 2} ${y} L${x + 2} ${y}`} />
              <path d={`M${x} ${y - 2} L${x} ${y + 2}`} />
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
}
