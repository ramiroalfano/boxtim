import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Zap, Leaf, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { HeroCarousel, type Slide } from "@/components/HeroCarousel";
import { ContactForm } from "@/components/ContactForm";
import { ModuleImage } from "@/components/ModuleImage";
import { Toaster } from "@/components/ui/sonner";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import hero from "@/assets/box/hero.jpg";
import showroom from "@/assets/box/showroom.jpeg";
import p1 from "@/assets/box/p1.jpg";
import boedo from "@/assets/box/boedocamp.png";
import level from "@/assets/box/level.png";
import lrc from "@/assets/box/lrcgym.jpeg";
import bodega from "@/assets/box/expandible.jpeg";
import cabana from "@/assets/box/cabana.jpeg";
import { modulos } from "@/data/modulos";

const proyectosHome = [
  { img: p1, title: "Complejo de Oficinas Corporativas", loc: "Salta, Argentina", area: "400 m²", year: "2024", desc: "Oficinas corporativas con sala de reuniones, baño y laboratorio." },
  { img: boedo, title: "BoedoCamp", loc: "Mendoza, Argentina", area: "120 m²", year: "2024", desc: "Ampliación y crecimiento del centro deportivo." },
  { img: level, title: "Level Gym", loc: "Mendoza, Argentina", area: "250 m²", year: "2023", desc: "Gimnasio modular con instalaciones completas." },
  { img: lrc, title: "Liceo Rugby Club Gym", loc: "Mendoza, Argentina", area: "80 m²", year: "2023", desc: "Ampliación del gimnasio del club." },
  { img: bodega, title: "Bodega Vitivinícola", loc: "Mendoza, Argentina", area: "300 m²", year: "2023", desc: "Espacio modular para producción y degustación." },
  { img: cabana, title: "Cabañas Vallecitos", loc: "Mendoza, Argentina", area: "150 m²", year: "2024", desc: "Cabañas turísticas en alta montaña." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BOXtime — Construcción Modular en Seco" },
      { name: "description", content: "Construcciones modulares con containers. Rápido, eficiente y sostenible. Mendoza, Argentina." },
    ],
  }),
  component: Index,
});

const slides: Slide[] = [
  {
    image: hero,
    eyebrow: "Construcción Modular",
    title: <>Construimos<br /><span className="text-primary">tu espacio</span> en tiempo récord.</>,
    subtitle: "Soluciones innovadoras en construcción en seco con containers.",
    ctaLabel: "Ver módulos",
    ctaTo: "/modulos",
  },
  {
    image: p1,
    eyebrow: "Oficinas a medida",
    title: <>Espacios <span className="text-primary">corporativos</span> modulares.</>,
    subtitle: "Diseñamos y construimos oficinas funcionales en una fracción del tiempo.",
    ctaLabel: "Conocer más",
    ctaTo: "/proyectos",
  },
  {
    image: showroom,
    eyebrow: "Vivienda inteligente",
    title: <>Tu hogar, <span className="text-primary">listo para habitar.</span></>,
    subtitle: "Viviendas compactas y expandibles con acabados premium.",
    ctaLabel: "Solicitar cotización",
    ctaTo: "/contacto",
  },
];




const features = [
  { icon: Zap, title: "Rapidez", desc: "Reducimos hasta un 60% los tiempos de obra tradicionales." },
  { icon: Leaf, title: "Sostenible", desc: "Construcción en seco con mínimo impacto ambiental." },
  { icon: ShieldCheck, title: "Calidad", desc: "Control riguroso en cada etapa del proceso." },
];

function Index() {
  return (
    <>
      <Toaster />
      <HeroCarousel slides={slides} />

      {/* MÓDULOS */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-display uppercase tracking-widest text-sm mb-3">Nuestros módulos</p>
            <h2 className="font-display text-4xl md:text-6xl">Diseños versátiles<br />para cada necesidad.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modulos.map((m) => (
              <Link to="/modulos/$slug" params={{ slug: m.slug }} key={m.slug} className="group block bg-card border border-border overflow-hidden hover:border-primary transition-all" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <ModuleImage src={m.img} alt={m.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2">{m.title}</h3>
                  <p className="text-muted-foreground text-sm">{m.desc}</p>
                  <div className="mt-4 inline-flex items-center text-primary text-sm font-medium gap-1 group-hover:gap-3 transition-all">
                    Ver más <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <p className="text-primary font-display uppercase tracking-widest text-sm mb-3">Portfolio</p>
              <h2 className="font-display text-4xl md:text-6xl">Proyectos<br />realizados.</h2>
            </div>
            <Link to="/proyectos" className="inline-flex items-center gap-2 text-primary font-display uppercase tracking-wider text-sm hover:gap-3 transition-all">
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {proyectosHome.map((p) => (
                <CarouselItem key={p.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <article className="group bg-background border border-border overflow-hidden hover:border-primary transition-all h-full" style={{ boxShadow: "var(--shadow-card)" }}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <ModuleImage src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        </div>
      </section>

      {/* SOBRE / STATS */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={hero} alt="Equipo BOXtime" loading="lazy" className="w-full aspect-[4/3] object-cover" />
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

      {/* CONTACTO */}
      <section id="contacto" className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-display uppercase tracking-widest text-sm mb-3">Contacto</p>
            <h2 className="font-display text-4xl md:text-6xl">¿Listo para<br /><span className="text-primary">tu proyecto?</span></h2>
            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
              Contanos qué tenés en mente y te respondemos en menos de 24hs.
            </p>
          </div>
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div className="space-y-8">
              <div>
                <Phone className="w-6 h-6 text-primary mb-2" />
                <div className="font-display text-lg">Teléfono</div>
                <div className="text-muted-foreground">+54 261 555-0123</div>
              </div>
              <div>
                <Mail className="w-6 h-6 text-primary mb-2" />
                <div className="font-display text-lg">Email</div>
                <div className="text-muted-foreground">info@boxtime.com.ar</div>
              </div>
              <div>
                <MapPin className="w-6 h-6 text-primary mb-2" />
                <div className="font-display text-lg">Ubicación</div>
                <div className="text-muted-foreground">Mendoza, Argentina</div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
