import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/proceso")({
  head: () => ({
    meta: [
      { title: "Proceso — BOXtime" },
      { name: "description", content: "Un método probado en 4 pasos que garantiza calidad y eficiencia." },
    ],
  }),
  component: Proceso,
});

const pasos = [
  { n: "01", title: "Consulta y Diseño", desc: "Analizamos tus necesidades y creamos un diseño personalizado que se ajusta a tu visión y presupuesto." },
  { n: "02", title: "Planificación", desc: "Desarrollamos planos detallados, gestionamos permisos y coordinamos todos los aspectos técnicos del proyecto." },
  { n: "03", title: "Fabricación", desc: "Construimos tu módulo en nuestras instalaciones con control de calidad riguroso en cada etapa del proceso." },
  { n: "04", title: "Instalación", desc: "Transportamos e instalamos tu estructura en tiempo récord, lista para usar con todos los acabados incluidos." },
];

function Proceso() {
  return (
    <>
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary font-display uppercase tracking-widest text-sm mb-3">Cómo trabajamos</p>
          <h1 className="font-display text-5xl md:text-7xl">Nuestro proceso<br/>en 4 pasos.</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Un método probado que garantiza calidad, transparencia y entrega en tiempo y forma.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-1">
          {pasos.map((p) => (
            <div key={p.n} className="grid md:grid-cols-[180px_1fr] gap-6 py-10 border-t border-border first:border-t-0 group">
              <div className="font-display text-7xl text-primary group-hover:scale-110 transition-transform origin-left">{p.n}</div>
              <div>
                <h2 className="font-display text-3xl md:text-4xl mb-3">{p.title}</h2>
                <p className="text-muted-foreground text-lg">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-primary text-primary-foreground text-center">
        <h2 className="font-display text-4xl md:text-5xl mb-6">Empecemos tu proyecto</h2>
        <Link to="/contacto" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 font-display uppercase tracking-wider text-sm hover:bg-background/90">
          Contactanos <ArrowRight className="w-4 h-4"/>
        </Link>
      </section>
    </>
  );
}
