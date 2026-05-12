import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = {
  image: string;
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  ctaLabel?: string;
  ctaTo?: string;
};

export function HeroCarousel({ slides, intervalMs = 6000 }: { slides: Slide[]; intervalMs?: number }) {
  const [i, setI] = useState(0);
  const next = () => setI((x) => (x + 1) % slides.length);
  const prev = () => setI((x) => (x - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(next, intervalMs);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length, intervalMs]);

  return (
    <section className="relative h-[92vh] min-h-[600px] overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <img src={s.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div className="max-w-5xl">
              {s.eyebrow && (
                <div className="inline-block bg-primary text-primary-foreground px-4 py-2 mb-6 font-display text-sm uppercase tracking-wider">
                  {s.eyebrow}
                </div>
              )}
              <h1 className="font-display text-5xl md:text-8xl text-white leading-[0.95]">{s.title}</h1>
              {s.subtitle && <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto">{s.subtitle}</p>}
              {s.ctaLabel && s.ctaTo && (
                <div className="mt-10">
                  <Link
                    to={s.ctaTo}
                    className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 font-display uppercase tracking-wider text-sm hover:bg-primary/90 transition-all hover:scale-105"
                    style={{ boxShadow: "var(--shadow-glow)" }}
                  >
                    {s.ctaLabel} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-primary transition-colors"
      >
        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
      </button>
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-primary transition-colors"
      >
        <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Ir al slide ${idx + 1}`}
            className={`h-1.5 transition-all ${idx === i ? "w-10 bg-primary" : "w-5 bg-white/50 hover:bg-white"}`}
          />
        ))}
      </div>
    </section>
  );
}
