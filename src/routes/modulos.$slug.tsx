import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
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
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-12 items-start">
          <div>
            <div className="text-primary font-display text-sm uppercase tracking-wider mb-2">Modelos disponibles</div>
            <h2 className="font-display text-3xl md:text-4xl mb-8">Elegí el que mejor se adapte a tu proyecto</h2>
            <ol className="space-y-6">
              {m.models.map((model, i) => (
                <li key={model.name} className="flex gap-5 border-b border-border pb-6">
                  <div className="font-display text-3xl text-primary leading-none w-10 shrink-0">{i + 1}</div>
                  <div>
                    <h3 className="font-display text-xl mb-1">{model.name}</h3>
                    <p className="text-muted-foreground">{model.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-6">
            <img src={m.img} alt={m.detailTitle} className="w-full aspect-[4/3] object-cover" style={{ boxShadow: "var(--shadow-card)" }} />
            <div className="bg-card p-6 border border-border">
              <h3 className="font-display text-lg mb-4 uppercase tracking-wider">Características</h3>
              <ul className="space-y-3">
                {m.features.map((f) => (
                  <li key={f} className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> {f}</li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="border-t border-border pt-4">
                  <div className="font-display uppercase text-xs text-muted-foreground">Variedad</div>
                  <div className="font-medium">Múltiples modelos</div>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="font-display uppercase text-xs text-muted-foreground">Servicio</div>
                  <div className="font-medium">Instalación incluida</div>
                </div>
              </div>
              <Link to="/contacto" className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-display uppercase tracking-wider text-sm hover:bg-primary/90 w-full justify-center">
                Cotizar este módulo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
