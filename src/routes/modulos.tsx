import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import oficina from "@/assets/box/oficina.png";
import vivienda from "@/assets/box/vivienda.png";
import sanitario from "@/assets/box/sanitario.png";
import expandible from "@/assets/box/expandible.jpeg";
import showroom from "@/assets/box/showroom.jpeg";
import p1 from "@/assets/box/p1.jpg";
import { PageBanner } from "@/components/PageBanner";

export const Route = createFileRoute("/modulos")({
  head: () => ({
    meta: [
      { title: "Módulos — BOXtime" },
      { name: "description", content: "Conocé nuestra línea de módulos: oficinas, viviendas, sanitarios y más." },
    ],
  }),
  component: Modulos,
});

const items = [
  {
    img: oficina,
    title: "Oficinas Modulares",
    desc: "Espacios corporativos modernos diseñados para productividad. Climatización, conexiones eléctricas y de red incluidas.",
    features: ["Aislación térmica y acústica", "Instalación eléctrica completa", "Climatización", "Acabados premium"],
  },
  {
    img: vivienda,
    title: "Viviendas Compactas",
    desc: "Hogares completos listos para habitar. Desde monoambientes hasta casas familiares expandibles.",
    features: ["Cocina y baño equipados", "Aislación de alta performance", "Carpinterías de PVC", "Lista para habitar"],
  },
  {
    img: sanitario,
    title: "Módulos Sanitarios",
    desc: "Soluciones completas para baños, vestuarios y espacios sanitarios en obra o eventos.",
    features: ["Inodoros y lavatorios", "Ducha con agua caliente", "Ventilación", "Conexión rápida"],
  },
  {
    img: expandible,
    title: "Vivienda Expandible",
    desc: "Diseños modulares que crecen con tu familia. Sumá módulos cuando los necesites.",
    features: ["Sistema escalable", "Conexión entre módulos", "Diseño unificado", "Habilitación rápida"],
  },
  {
    img: showroom,
    title: "Showroom & Comercio",
    desc: "Espacios de exhibición premium para marcas que buscan destacarse.",
    features: ["Vidrieras amplias", "Iluminación LED", "Diseño personalizable", "Movilidad total"],
  },
  {
    img: p1,
    title: "Obradores & Logística",
    desc: "Módulos resistentes para obras, campamentos y operaciones en campo.",
    features: ["Alta durabilidad", "Stock inmediato", "Fácil traslado", "Costo eficiente"],
  },
];

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
          {items.map((item, i) => (
            <div key={item.title} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <img src={item.img} alt={item.title} loading="lazy" className="w-full aspect-[4/3] object-cover" style={{ boxShadow: "var(--shadow-card)" }} />
              <div>
                <div className="text-primary font-display text-sm uppercase tracking-wider mb-2">0{i + 1}</div>
                <h2 className="font-display text-4xl md:text-5xl mb-4">{item.title}</h2>
                <p className="text-muted-foreground mb-6">{item.desc}</p>
                <ul className="space-y-2 mb-8">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-center gap-3"><Check className="w-5 h-5 text-primary"/> {f}</li>
                  ))}
                </ul>
                <Link to="/contacto" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-display uppercase tracking-wider text-sm hover:bg-primary/90">
                  Cotizar <ArrowRight className="w-4 h-4"/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
