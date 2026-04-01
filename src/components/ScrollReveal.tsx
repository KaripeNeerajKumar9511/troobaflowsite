import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const ScrollReveal = ({ children, className = "" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);

    // Fallback: ensure content is never permanently hidden
    const fallback = setTimeout(() => {
      if (el.style.opacity !== "1") {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      }
    }, 1200);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: "translateY(12px)" }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
