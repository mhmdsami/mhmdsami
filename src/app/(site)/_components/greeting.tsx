import RotatingText from "@/components/rotating-text";

const greetings = [
  { text: "Hello", lang: "en" },
  { text: "வணக்கம்", lang: "ta", className: "text-[1.1em]" },
  { text: "ഹലോ", lang: "ml", className: "text-[1.1em]" },
  { text: "ನಮಸ್ಕಾರ", lang: "kn", className: "text-[1.1em]" },
  { text: "سلام", lang: "ur", className: "text-[1.4em] leading-[1.4]" },
  { text: "नमस्ते", lang: "hi", className: "text-[1.15em]" },
  { text: "Bonjour", lang: "fr" },
  { text: "Hallo", lang: "de" },
];

export default function Greeting() {
  return (
    <span className="block text-sm text-tertiary">
      <RotatingText items={greetings} />
    </span>
  );
}
