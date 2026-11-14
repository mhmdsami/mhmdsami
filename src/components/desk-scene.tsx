import { cn } from "@/components/ui/cn";

export default function DeskScene({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={cn("desk-scene block w-full", className)} viewBox="-307 -180 787 652">
      <defs>
        <linearGradient id="desk-screen-tint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--desk-line)" stopOpacity="0.08" />
          <stop offset="1" stopColor="var(--desk-line)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g strokeLinecap="round" strokeLinejoin="round">
        <g>
          <path
            d="M0 0 L450.3 260 L173.2 420 L-277.1 160 Z"
            fill="var(--desk-5)"
            stroke="var(--desk-line)"
            strokeOpacity="0.6"
            strokeWidth="0.9"
          />
          <path
            d="M450.3 260 L173.2 420 L173.2 442 L450.3 282 Z"
            fill="var(--desk-6)"
            stroke="var(--desk-line)"
            strokeOpacity="0.35"
            strokeWidth="0.75"
          />
          <path
            d="M-277.1 160 L173.2 420 L173.2 442 L-277.1 182 Z"
            fill="var(--desk-7)"
            stroke="var(--desk-line)"
            strokeOpacity="0.35"
            strokeWidth="0.75"
          />
        </g>

        <g>
          <path
            d="M84.9 149 L-19.1 209 L-19.1 221 L84.9 161 Z"
            fill="var(--desk-6)"
            stroke="var(--desk-line)"
            strokeOpacity="0.35"
            strokeWidth="0.75"
          />
          <path
            d="M-183.6 114 L-19.1 209 L-19.1 221 L-183.6 126 Z"
            fill="var(--desk-7)"
            stroke="var(--desk-line)"
            strokeOpacity="0.35"
            strokeWidth="0.75"
          />
          <path
            d="M-79.7 54 L84.9 149 L-19.1 209 L-183.6 114 Z"
            fill="var(--desk-3)"
            stroke="var(--desk-line)"
            strokeOpacity="0.65"
            strokeWidth="0.85"
          />

          <g transform="translate(-79.7 54) matrix(0.866 0.5 -0.866 0.5 0 0)">
            <rect
              x="4"
              y="4"
              width="190"
              height="120"
              rx="3"
              fill="var(--desk-5)"
              stroke="var(--desk-line)"
              strokeOpacity="0.5"
              strokeWidth="0.75"
            />
            <g fill="var(--desk-8)" stroke="var(--desk-line)" strokeOpacity="0.2" strokeWidth="0.6">
              <rect x="7" y="10" width="18" height="8" rx="1.5" />
              <rect x="29" y="10" width="18" height="8" rx="1.5" />
              <rect x="51" y="10" width="18" height="8" rx="1.5" />
              <rect x="73" y="10" width="18" height="8" rx="1.5" />
              <rect x="95" y="10" width="18" height="8" rx="1.5" />
              <rect x="117" y="10" width="18" height="8" rx="1.5" />
              <rect x="139" y="10" width="18" height="8" rx="1.5" />
              <rect x="161" y="10" width="18" height="8" rx="1.5" />
              <rect x="7" y="24" width="18" height="8" rx="1.5" />
              <rect x="29" y="24" width="18" height="8" rx="1.5" />
              <rect x="51" y="24" width="18" height="8" rx="1.5" />
              <rect x="73" y="24" width="18" height="8" rx="1.5" />
              <rect x="95" y="24" width="18" height="8" rx="1.5" />
              <rect x="117" y="24" width="18" height="8" rx="1.5" />
              <rect x="139" y="24" width="18" height="8" rx="1.5" />
              <rect x="161" y="24" width="18" height="8" rx="1.5" />
              <rect x="7" y="38" width="18" height="8" rx="1.5" />
              <rect x="29" y="38" width="18" height="8" rx="1.5" />
              <rect x="51" y="38" width="18" height="8" rx="1.5" />
              <rect x="73" y="38" width="18" height="8" rx="1.5" />
              <rect x="95" y="38" width="18" height="8" rx="1.5" />
              <rect x="117" y="38" width="18" height="8" rx="1.5" />
              <rect x="139" y="38" width="18" height="8" rx="1.5" />
              <rect x="161" y="38" width="18" height="8" rx="1.5" />
            </g>
            <rect
              x="62"
              y="80"
              width="66"
              height="28"
              rx="2"
              fill="var(--desk-3)"
              stroke="var(--desk-line)"
              strokeOpacity="0.4"
              strokeWidth="0.7"
            />
          </g>

          <path
            d="M-69.3 -72 L95.3 23 L84.9 29 L-79.7 -66 Z"
            fill="var(--desk-2)"
            stroke="var(--desk-line)"
            strokeOpacity="0.6"
            strokeWidth="0.85"
          />
          <path
            d="M95.3 23 L84.9 29 L84.9 149 L95.3 143 Z"
            fill="var(--desk-4)"
            stroke="var(--desk-line)"
            strokeOpacity="0.4"
            strokeWidth="0.75"
          />

          <g transform="translate(-79.7 -66) matrix(0.866 0.5 0 1 0 0)">
            <rect
              x="0"
              y="0"
              width="190"
              height="120"
              rx="6"
              fill="var(--desk-3)"
              stroke="var(--desk-line)"
              strokeOpacity="0.72"
              strokeWidth="0.85"
            />
            <rect
              x="8"
              y="8"
              width="174"
              height="100"
              rx="3"
              fill="var(--desk-6)"
              stroke="var(--desk-line)"
              strokeOpacity="0.3"
              strokeWidth="0.8"
            />
            <rect x="8" y="8" width="174" height="100" rx="3" fill="url(#desk-screen-tint)" />
            <rect x="18" y="24" width="78" height="5" rx="2.5" fill="var(--desk-line)" opacity="0.8" />
            <rect x="30" y="38" width="118" height="5" rx="2.5" fill="var(--desk-line)" opacity="0.45" />
            <rect x="30" y="52" width="86" height="5" rx="2.5" fill="var(--desk-line)" opacity="0.3" />
            <rect x="18" y="66" width="52" height="5" rx="2.5" fill="var(--desk-line)" opacity="0.6" />
            <circle cx="95" cy="114" r="2.4" fill="var(--desk-line)" opacity="0.9" />
          </g>
        </g>

        <g transform="translate(40 0)">
          <path
            d="M212.2 157.5 L255.4 182.5 L229.5 197.5 L186.2 172.5 Z"
            fill="var(--desk-3)"
            stroke="var(--desk-line)"
            strokeOpacity="0.6"
            strokeWidth="0.8"
          />
          <path
            d="M255.4 182.5 L229.5 197.5 L229.5 207.5 L255.4 192.5 Z"
            fill="var(--desk-6)"
            stroke="var(--desk-line)"
            strokeOpacity="0.35"
            strokeWidth="0.7"
          />
          <path
            d="M186.2 172.5 L229.5 197.5 L229.5 207.5 L186.2 182.5 Z"
            fill="var(--desk-7)"
            stroke="var(--desk-line)"
            strokeOpacity="0.35"
            strokeWidth="0.7"
          />

          <path
            d="M246.8 102.5 L229.5 112.5 L229.5 182.5 L246.8 172.5 Z"
            fill="var(--desk-4)"
            stroke="var(--desk-line)"
            strokeOpacity="0.45"
            strokeWidth="0.75"
          />
          <path
            d="M229.5 112.5 L212.2 102.5 L212.2 172.5 L229.5 182.5 Z"
            fill="var(--desk-3)"
            stroke="var(--desk-line)"
            strokeOpacity="0.45"
            strokeWidth="0.75"
          />
          <path
            d="M229.5 92.5 L246.8 102.5 L229.5 112.5 L212.2 102.5 Z"
            fill="var(--desk-2)"
            stroke="var(--desk-line)"
            strokeOpacity="0.45"
            strokeWidth="0.75"
          />

          <path
            d="M121.2 -150 L355.1 -15 L337.7 -5 L103.9 -140 Z"
            fill="var(--desk-2)"
            stroke="var(--desk-line)"
            strokeOpacity="0.65"
            strokeWidth="0.85"
          />
          <path
            d="M355.1 -15 L337.7 -5 L337.7 175 L355.1 165 Z"
            fill="var(--desk-4)"
            stroke="var(--desk-line)"
            strokeOpacity="0.45"
            strokeWidth="0.75"
          />

          <g transform="translate(103.9 -140) matrix(0.866 0.5 0 1 0 0)">
            <rect
              x="0"
              y="0"
              width="270"
              height="180"
              rx="6"
              fill="var(--desk-3)"
              stroke="var(--desk-line)"
              strokeOpacity="0.75"
              strokeWidth="0.9"
            />
            <rect
              x="14"
              y="14"
              width="242"
              height="142"
              fill="var(--desk-6)"
              stroke="var(--desk-line)"
              strokeOpacity="0.3"
              strokeWidth="0.8"
            />
            <rect x="14" y="14" width="242" height="142" fill="url(#desk-screen-tint)" />
            <rect x="28" y="30" width="72" height="5" rx="2.5" fill="var(--desk-line)" opacity="0.9" />
            <rect x="40" y="44" width="118" height="5" rx="2.5" fill="var(--desk-line)" opacity="0.45" />
            <rect x="28" y="64" width="54" height="5" rx="2.5" fill="var(--desk-line)" opacity="0.75" />
            <rect x="40" y="78" width="100" height="5" rx="2.5" fill="var(--desk-line)" opacity="0.25" />
            <rect
              className="typing-line"
              x="40"
              y="96"
              width="140"
              height="5"
              rx="2.5"
              fill="var(--desk-line)"
              opacity="0.6"
            />
            <rect className="screen-caret" x="40" y="93" width="3" height="11" fill="var(--desk-line)" />
            <circle className="screen-led" cx="246" cy="168" r="2.8" fill="var(--desk-line)" />
          </g>
        </g>

        <g transform="translate(50 0)">
          <path
            d="M-8.7 179 L181.9 289 L112.6 329 L-77.9 219 Z"
            fill="var(--desk-3)"
            stroke="var(--desk-line)"
            strokeOpacity="0.6"
            strokeWidth="0.85"
          />
          <path
            d="M181.9 289 L112.6 329 L112.6 343 L181.9 303 Z"
            fill="var(--desk-6)"
            stroke="var(--desk-line)"
            strokeOpacity="0.3"
            strokeWidth="0.7"
          />
          <path
            d="M-77.9 219 L112.6 329 L112.6 343 L-77.9 233 Z"
            fill="var(--desk-7)"
            stroke="var(--desk-line)"
            strokeOpacity="0.3"
            strokeWidth="0.7"
          />

          <g transform="translate(-8.7 179) matrix(0.866 0.5 -0.866 0.5 0 0)">
            <rect
              x="4"
              y="4"
              width="212"
              height="72"
              rx="5"
              fill="var(--desk-5)"
              stroke="var(--desk-line)"
              strokeOpacity="0.55"
              strokeWidth="0.75"
            />
            <g fill="var(--desk-1)" stroke="var(--desk-line)" strokeOpacity="0.28" strokeWidth="0.65">
              <rect x="10" y="10" width="20" height="10" rx="1.5" />
              <rect x="35" y="10" width="20" height="10" rx="1.5" />
              <rect x="60" y="10" width="20" height="10" rx="1.5" />
              <rect x="85" y="10" width="20" height="10" rx="1.5" />
              <rect x="110" y="10" width="20" height="10" rx="1.5" />
              <rect x="135" y="10" width="20" height="10" rx="1.5" />
              <rect x="160" y="10" width="20" height="10" rx="1.5" />
              <rect x="185" y="10" width="20" height="10" rx="1.5" />
              <rect x="10" y="26" width="20" height="10" rx="1.5" />
              <rect x="35" y="26" width="20" height="10" rx="1.5" />
              <rect x="60" y="26" width="20" height="10" rx="1.5" />
              <rect x="85" y="26" width="20" height="10" rx="1.5" />
              <rect x="110" y="26" width="20" height="10" rx="1.5" />
              <rect x="135" y="26" width="20" height="10" rx="1.5" />
              <rect x="160" y="26" width="20" height="10" rx="1.5" />
              <rect x="185" y="26" width="20" height="10" rx="1.5" />
              <rect x="10" y="42" width="20" height="10" rx="1.5" />
              <rect x="35" y="42" width="20" height="10" rx="1.5" />
              <rect x="60" y="42" width="20" height="10" rx="1.5" />
              <rect x="85" y="42" width="20" height="10" rx="1.5" />
              <rect x="110" y="42" width="20" height="10" rx="1.5" />
              <rect x="135" y="42" width="20" height="10" rx="1.5" />
              <rect x="160" y="42" width="20" height="10" rx="1.5" />
              <rect x="185" y="42" width="20" height="10" rx="1.5" />
              <rect x="10" y="58" width="30" height="10" rx="1.5" />
              <rect x="45" y="58" width="110" height="10" rx="1.5" />
              <rect x="160" y="58" width="45" height="10" rx="1.5" />
            </g>
          </g>
        </g>

        <g className="desk-mug" transform="translate(433 100)">
          <ellipse
            cx="-164.5"
            cy="185"
            rx="34.3"
            ry="19.8"
            fill="var(--desk-6)"
            stroke="var(--desk-line)"
            strokeOpacity="0.35"
            strokeWidth="0.7"
          />
          <path d="M-198.8 139 L-198.8 185 A34.3 19.8 0 0 0 -130.2 185 L-130.2 139 Z" fill="var(--desk-8)" />
          <path
            d="M-198.8 139 L-198.8 185 A34.3 19.8 0 0 0 -130.2 185 L-130.2 139"
            fill="none"
            stroke="var(--desk-line)"
            strokeOpacity="0.55"
            strokeWidth="0.8"
          />
          <path
            d="M-133 148 C -112 150 -110 168 -134 172"
            fill="none"
            stroke="var(--desk-line)"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
          <ellipse
            cx="-164.5"
            cy="139"
            rx="34.3"
            ry="19.8"
            fill="var(--desk-2)"
            stroke="var(--desk-line)"
            strokeOpacity="0.6"
            strokeWidth="0.8"
          />
          <ellipse
            cx="-164.5"
            cy="140"
            rx="28.4"
            ry="16.2"
            fill="var(--desk-3)"
            stroke="var(--desk-line)"
            strokeOpacity="0.4"
            strokeWidth="0.7"
          />

          <g className="steam">
            <path className="steam-wisp" d="M-176 132 C -186 120 -170 112 -179 98" />
            <path className="steam-wisp" d="M-164 133 C -154 121 -170 114 -161 100" />
          </g>
        </g>
      </g>
    </svg>
  );
}
