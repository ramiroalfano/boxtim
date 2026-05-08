import { ReactNode } from "react";

export function PageBanner({
  image,
  eyebrow,
  title,
  subtitle,
  height = "h-[55vh] min-h-[380px]",
}: {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  height?: string;
}) {
  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {eyebrow && (
          <p className="text-primary font-display uppercase tracking-widest text-sm mb-3">{eyebrow}</p>
        )}
        <h1 className="font-display text-4xl md:text-6xl text-white leading-[1]">{title}</h1>
        {subtitle && <p className="mt-5 text-lg text-white/85 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
