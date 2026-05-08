import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Zap, Leaf, ShieldCheck } from "lucide-react";
import hero from "@/assets/hero.jpg";
import oficina from "@/assets/modulo-oficina.jpg";
import vivienda from "@/assets/modulo-vivienda.jpg";
import sanitario from "@/assets/modulo-sanitario.jpg";
import equipo from "@/assets/equipo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BOXtime — Construcción Modular en Seco" },
      { name: "description", content: "Construcciones modulares con containers. Rápido, eficiente y sostenible. Mendoza, Argentina." },
    ],
  }),
  component: Index,
});

const modulos = [
  { img: oficina, title: "Oficinas Modulares", desc: "Espacios de trabajo modernos y funcionales" },
  { img: vivienda, title: "Viviendas Compactas", desc: "Hogares completos listos para habitar" },
  { img: sanitario, title: "Módulos Sanitarios", desc: "Soluciones completas para baños y vestuarios" },
];

const features = [
  { icon: Zap, title: "Rapidez", desc: "Reducimos hasta un 60% los tiempos de obra tradicionales." },
  { icon: Leaf, title: "Sostenible", desc: "Construcción en seco con mínimo impacto ambiental." },
  { icon: ShieldCheck, title: "Calidad", desc: "Control riguroso en cada etapa del proceso." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img src={hero} alt="Construcción modular BOXtime" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="inline-block bg-primary text-primary-foreground px-4 py-2 mb-6 font-display text-sm uppercase tracking-wider">
            Construcción Modular
          </div>
          <h1 className="font-display text-5xl md:text-8xl text-foreground leading-[0.95]">
            Construimos<br />
            <span className="text-primary">tu espacio</span> en tiempo récord.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Soluciones innovadoras en construcción en seco con containers. Rápido, eficiente y sostenible.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/modulos" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 font-display uppercase tracking-wider text-sm hover:bg-primary/90 transition-all hover:scale-105" style={{ boxShadow: "var(--shadow-glow)" }}>
              Ver módulos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contacto" className="inline-flex items-center gap-2 border border-foreground/30 text-foreground px-7 py-4 font-display uppercase tracking-wider text-sm hover:bg-foreground hover:text-background transition-all">
              Contacto
            </Link>
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-display uppercase tracking-widest text-sm mb-3">Nuestros módulos</p>
            <h2 className="font-display text-4xl md:text-6xl">Diseños versátiles<br/>para cada necesidad.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {modulos.map((m) => (
              <Link to="/modulos" key={m.title} className="group block bg-card border border-border overflow-hidden hover:border-primary transition-all" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={m.img} alt={m.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2">{m.title}</h3>
                  <p className="text-muted-foreground text-sm">{m.desc}</p>
                  <div className="mt-4 inline-flex items-center text-primary text-sm font-medium gap-1 group-hover:gap-3 transition-all">
                    Conocer más <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE / STATS */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={equipo} alt="Equipo BOXtime" loading="lazy" className="w-full aspect-[4/3] object-cover" />
          <div>
            <p className="text-primary font-display uppercase tracking-widest text-sm mb-3">Quiénes somos</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Innovación en cada estructura.</h2>
            <p className="text-muted-foreground mb-4">
              En BOXtime transformamos containers en espacios habitables de alta calidad. Con más de 10 años de experiencia, combinamos diseño innovador con eficiencia constructiva.
            </p>
            <p className="text-muted-foreground mb-8">
              Nuestro sistema de construcción en seco reduce tiempos de obra hasta en un 60% y minimiza el impacto ambiental.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="font-display text-5xl text-primary">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Proyectos completados</div>
              </div>
              <div>
                <div className="font-display text-5xl text-primary">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="border border-border p-8 hover:border-primary transition-colors">
              <f.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-2xl mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl mb-6">¿Listo para tu proyecto?</h2>
          <p className="text-lg mb-8 opacity-90">Contactanos y comencemos a construir juntos tu espacio ideal.</p>
          <Link to="/contacto" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 font-display uppercase tracking-wider text-sm hover:bg-background/90 transition-all">
            Solicitar cotización <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
