import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { modulos, type Modulo } from "@/data/modulos";

export const Route = createFileRoute("/modulos/$slug")({
  component: ModuloDetail,
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <h1 className="font-display text-4xl mb-4">Módulo no encontrado</h1>
      <Link to="/modulos" className="text-primary underline">Volver al catálogo</Link>
    </div>
  ),
  loader: ({ params }) => {
    const m = modulos.find((x) => x.slug === params.slug);
    if (!m) throw notFound();
    return m;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.detailTitle} — BOXtime` },
          { name: "description", content: loaderData.detailSubtitle },
        ]
      : [],
  }),
});

function ModuloDetail() {
  const m = Route.useLoaderData() as Modulo;
  const [selected, setSelected] = useState(0);
  const model = m.models[selected];

  return (
    <>
      <section
        className="relative min-h-[50vh] flex items-end px-6 py-20 text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.75)), url(${m.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <Link to="/modulos" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm uppercase tracking-wider font-display">
            <ArrowLeft className="w-4 h-4" /> Volver al catálogo
          </Link>
          <h1 className="font-display text-5xl md:text-7xl mb-4">{m.detailTitle}</h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl">{m.detailSubtitle}</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-10 items-start">
          <div>
            <div className="text-primary font-display text-sm uppercase tracking-wider mb-2">Modelos disponibles</div>
            <h2 className="font-display text-3xl md:text-4xl mb-8">Elegí el que mejor se adapte</h2>
            <div className="space-y-3">
              {m.models.map((mod, i) => {
                const active = i === selected;
                return (
                  <button
                    key={mod.name}
                    onClick={() => setSelected(i)}
                    className={`w-full text-left p-4 border transition-all ${active ? "border-primary bg-card" : "border-border bg-background hover:border-primary/40"}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-display ${active ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-display text-lg mb-1">{mod.name}</h3>
                        <p className="text-sm text-muted-foreground">{mod.desc}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <img
              key={model.img}
              src={model.img}
              alt={model.name}
              className="w-full aspect-[4/3] object-cover animate-in fade-in duration-300"
              style={{ boxShadow: "var(--shadow-card)" }}
            />
            <div className="bg-card p-6 border border-border">
              <div className="text-primary font-display text-xs uppercase tracking-wider mb-1">Modelo seleccionado</div>
              <h3 className="font-display text-2xl md:text-3xl mb-2">{model.name}</h3>
              <p className="text-muted-foreground mb-6">{model.desc}</p>

              {model.highlights && (
                <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                  {model.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" /> {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="grid grid-cols-2 gap-4 text-sm border-t border-border pt-4">
                <div>
                  <div className="font-display uppercase text-xs text-muted-foreground">Variedad</div>
                  <div className="font-medium">Múltiples modelos</div>
                </div>
                <div>
                  <div className="font-display uppercase text-xs text-muted-foreground">Servicio</div>
                  <div className="font-medium">Instalación incluida</div>
                </div>
              </div>

              <Link to="/contacto" className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-display uppercase tracking-wider text-sm hover:bg-primary/90 w-full justify-center">
                Cotizar este modelo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
