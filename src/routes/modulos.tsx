import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import oficina from "@/assets/box/oficina.png";
import vivienda from "@/assets/box/vivienda.png";
import sanitario from "@/assets/box/sanitario.png";
import expandible from "@/assets/box/expandible.jpeg";
import showroom from "@/assets/box/showroom.jpeg";
import p1 from "@/assets/box/p1.jpg";
import { PageBanner } from "@/components/PageBanner";
import { ModuleImage } from "@/components/ModuleImage";
import { modulos } from "@/data/modulos";

export const Route = createFileRoute("/modulos")({
  head: () => ({
    meta: [
      { title: "Módulos — BOXtime" },
      { name: "description", content: "Conocé nuestra línea de módulos: oficinas, viviendas, sanitarios y más." },
    ],
  }),
  component: Modulos,
});

function Modulos() {
  return (
    <>
      <PageBanner
        image={oficina}
        eyebrow="Catálogo"
        title="Nuestros módulos."
        subtitle="Soluciones modulares pensadas para adaptarse a tus necesidades. Cada unidad se entrega lista para usar."
      />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {modulos.map((item, i) => (
            <article key={item.slug} className={`grid md:grid-cols-2 gap-10 items-center rounded-2xl border border-border/70 bg-card/40 p-4 md:p-6 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <ModuleImage src={item.img} alt={item.title} loading="lazy" className="w-full aspect-[4/3] object-cover" style={{ boxShadow: "var(--shadow-card)" }} />
              <div>
                <div className="text-primary font-display text-sm uppercase tracking-wider mb-2">0{i + 1}</div>
                <h2 className="font-display text-4xl md:text-5xl mb-4">{item.title}</h2>
                <p className="text-muted-foreground mb-6">{item.desc}</p>
                <Link to="/modulos/$slug" params={{ slug: item.slug }} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-display uppercase tracking-wider text-sm hover:bg-primary/90">
                  Ver más <ArrowRight className="w-4 h-4"/>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
