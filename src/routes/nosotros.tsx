import { createFileRoute } from "@tanstack/react-router";
import equipo from "@/assets/box/hero.jpg";
import { Award, Users, Wrench, Globe } from "lucide-react";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — BOXtime" },
      { name: "description", content: "Más de 10 años transformando containers en espacios habitables de alta calidad." },
    ],
  }),
  component: Nosotros,
});

const valores = [
  { icon: Award, title: "Calidad", desc: "Materiales de primera y control en cada etapa." },
  { icon: Users, title: "Compromiso", desc: "Acompañamos al cliente desde el primer boceto." },
  { icon: Wrench, title: "Innovación", desc: "Sistemas constructivos en seco de última generación." },
  { icon: Globe, title: "Sustentabilidad", desc: "Reducimos residuos y reutilizamos containers." },
];

function Nosotros() {
  return (
    <>
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary font-display uppercase tracking-widest text-sm mb-3">Quiénes somos</p>
          <h1 className="font-display text-5xl md:text-7xl">Construyendo el futuro,<br/><span className="text-primary">módulo a módulo.</span></h1>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={equipo} alt="Equipo BOXtime" loading="lazy" className="w-full aspect-[4/3] object-cover" />
          <div className="space-y-5 text-muted-foreground">
            <p>BOXtime nació en Mendoza con una idea clara: hacer la construcción más rápida, accesible y sustentable. Más de una década después, somos referentes en construcción modular con containers en toda la región de Cuyo.</p>
            <p>Nuestro equipo combina arquitectos, ingenieros y constructores con experiencia en obras de todas las escalas. Trabajamos con clientes particulares, empresas y organismos públicos.</p>
            <p>Cada módulo que entregamos es el resultado de un proceso colaborativo, donde escuchamos al cliente y diseñamos a medida.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl mb-12 text-center">Nuestros valores</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {valores.map((v) => (
              <div key={v.title} className="border border-border p-6 hover:border-primary transition-colors">
                <v.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-display text-xl mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
