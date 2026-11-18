export function lockScroll() {
  const root = document.documentElement;
  const previous = root.style.overflow;

  root.style.overflow = "hidden";

  return () => {
    root.style.overflow = previous;
  };
}
