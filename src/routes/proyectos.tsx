import { createFileRoute } from "@tanstack/react-router";
import p1 from "@/assets/box/p1.jpg";
import boedo from "@/assets/box/boedocamp.png";
import level from "@/assets/box/level.png";
import lrc from "@/assets/box/lrcgym.jpeg";
import bodega from "@/assets/box/expandible.jpeg";
import cabana from "@/assets/box/cabana.jpeg";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — BOXtime" },
      { name: "description", content: "Más de 500 proyectos completados. Conocé algunas de nuestras construcciones más destacadas." },
    ],
  }),
  component: Proyectos,
});

const proyectos = [
  { img: p1, title: "Complejo de Oficinas Corporativas", loc: "Salta, Argentina", area: "400 m²", year: "2024", desc: "Oficinas corporativas con sala de reuniones, baño y laboratorio." },
  { img: equipo, title: "BoedoCamp", loc: "Mendoza, Argentina", area: "120 m²", year: "2024", desc: "Ampliación y crecimiento del centro deportivo." },
  { img: p2, title: "Level Gym", loc: "Mendoza, Argentina", area: "250 m²", year: "2023", desc: "Gimnasio modular con instalaciones completas." },
  { img: oficina, title: "Liceo Rugby Club Gym", loc: "Mendoza, Argentina", area: "80 m²", year: "2023", desc: "Ampliación del gimnasio del club." },
  { img: vivienda, title: "Bodega Vitivinícola", loc: "Mendoza, Argentina", area: "300 m²", year: "2023", desc: "Espacio modular para producción y degustación." },
  { img: p3, title: "Cabañas Vallecitos", loc: "Mendoza, Argentina", area: "150 m²", year: "2024", desc: "Cabañas turísticas en alta montaña." },
];

function Proyectos() {
  return (
    <>
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary font-display uppercase tracking-widest text-sm mb-3">Portfolio</p>
          <h1 className="font-display text-5xl md:text-7xl">Proyectos realizados.</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Más de 500 proyectos completados con éxito. Cada uno con su historia.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectos.map((p) => (
            <article key={p.title} className="group bg-card border border-border overflow-hidden hover:border-primary transition-all" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex justify-between text-xs text-muted-foreground border-t border-border pt-3">
                  <span>{p.loc}</span>
                  <span className="text-primary font-medium">{p.area} · {p.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
