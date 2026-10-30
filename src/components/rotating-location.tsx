import RotatingText from "@/components/rotating-text";

export default function RotatingLocation({ items, country }: { items: Array<string>; country: string }) {
  return <RotatingText items={items.map((item) => ({ text: `${item}, ${country}`, lang: "en" }))} interval={12000} />;
}
