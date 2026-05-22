import oficina from "@/assets/box/oficina.png";
import vivienda from "@/assets/box/vivienda.png";
import sanitario from "@/assets/box/sanitario.png";
import expandible from "@/assets/box/expandible.jpeg";
import showroom from "@/assets/box/showroom.jpeg";
import p1 from "@/assets/box/p1.jpg";
import boedo from "@/assets/box/boedocamp.png";
import level from "@/assets/box/level.png";
import lrc from "@/assets/box/lrcgym.jpeg";
import cabana from "@/assets/box/cabana.jpeg";
import hero from "@/assets/box/hero.jpg";
import oficinaChica from "@/assets/box/oficina-chica.png";
import oficinaGrande from "@/assets/box/oficina-grande.png";
import oficinaPersonalizada from "@/assets/box/oficina-personalizada.png";

export type ModuloModel = {
  name: string;
  desc: string;
  img: string;
  highlights?: string[];
};

export type Modulo = {
  slug: string;
  img: string;
  title: string;
  detailTitle: string;
  desc: string;
  detailSubtitle: string;
  features: string[];
  models: ModuloModel[];
};

export const modulos: Modulo[] = [
  {
    slug: "oficina-ejecutiva",
    img: oficina,
    title: "Oficinas Modulares",
    detailTitle: "Oficinas Modulares",
    desc: "Espacios corporativos modernos diseñados para productividad. Climatización, conexiones eléctricas y de red incluidas.",
    detailSubtitle: "Espacios de trabajo modernos y funcionales diseñados para maximizar la productividad",
    features: ["Aislación térmica y acústica", "Instalación eléctrica completa", "Climatización", "Acabados premium"],
    models: [
      {
        name: "Oficina Chica 15m²",
        desc: "Espacio para 1-2 personas, estandarizada y lista para instalar en obra o predio.",
        img: oficinaChica,
        highlights: ["1 a 2 puestos de trabajo", "Climatización incluida", "Iluminación LED", "Listo para usar"],
      },
      {
        name: "Oficina Grande 30m²",
        desc: "Capacidad para 3-4 personas con espacio para reuniones y guardado.",
        img: oficinaGrande,
        highlights: ["3 a 4 puestos", "Sala de reuniones", "Cableado de red", "Aislación reforzada"],
      },
      {
        name: "Oficina Personalizada",
        desc: "Diseño a medida según tus necesidades. Contanos tu proyecto y lo cotizamos.",
        img: oficinaPersonalizada,
        highlights: ["Layout a medida", "Terminaciones premium", "Branding integrado", "Asesoramiento técnico"],
      },
    ],
  },
  {
    slug: "vivienda-compacta",
    img: vivienda,
    title: "Viviendas Compactas",
    detailTitle: "Alquiler",
    desc: "Hogares completos listos para habitar. Desde monoambientes hasta casas familiares expandibles.",
    detailSubtitle: "Hogares completos listos para habitar con todos los servicios incluidos",
    features: ["Cocina y baño equipados", "Aislación de alta performance", "Carpinterías de PVC", "Lista para habitar"],
    models: [
      {
        name: "Oficina 15m²",
        desc: "Espacio para 1-2 personas, estandarizada.",
        img: oficina,
        highlights: ["1 a 2 personas", "Conexión eléctrica", "Climatización", "Entrega rápida"],
      },
      {
        name: "Laboratorios",
        desc: "Dormitorio separado, cocina equipada y baño completo.",
        img: vivienda,
        highlights: ["Dormitorio independiente", "Cocina equipada", "Baño completo", "Aislación premium"],
      },
      {
        name: "Pañoles obrador",
        desc: "Para construcciones, estandarizados y de alta resistencia.",
        img: p1,
        highlights: ["Alta resistencia", "Cerraduras reforzadas", "Stock inmediato", "Fácil traslado"],
      },
      {
        name: "Sanitarios",
        desc: "Baño completo con conexión rápida.",
        img: sanitario,
        highlights: ["Inodoro y lavatorio", "Ducha agua caliente", "Ventilación", "Conexión rápida"],
      },
    ],
  },
  {
    slug: "modulo-sanitario",
    img: sanitario,
    title: "Módulos Sanitarios",
    detailTitle: "Módulos Sanitarios",
    desc: "Soluciones completas para baños, vestuarios y espacios sanitarios en obra o eventos.",
    detailSubtitle: "Soluciones completas para baños y vestuarios de alta calidad",
    features: ["Inodoros y lavatorios", "Ducha con agua caliente", "Ventilación", "Conexión rápida"],
    models: [
      {
        name: "Baño personalizado",
        desc: "Consultá por diseño personalizado según tus necesidades específicas.",
        img: sanitario,
        highlights: ["Diseño a medida", "Ducha con agua caliente", "Ventilación forzada", "Listo para conectar"],
      },
    ],
  },
  {
    slug: "vivienda-expandible",
    img: expandible,
    title: "Vivienda Expandible",
    detailTitle: "Habitacional y Construcción",
    desc: "Diseños modulares que crecen con tu familia. Sumá módulos cuando los necesites.",
    detailSubtitle: "Diseños modulares que crecen junto a tus necesidades",
    features: ["Sistema escalable", "Conexión entre módulos", "Diseño unificado", "Habilitación rápida"],
    models: [
      {
        name: "Modelo Comercial",
        desc: "Estandarizado, listo para instalar.",
        img: expandible,
        highlights: ["Entrega rápida", "Sistema escalable", "Conexión entre módulos", "Diseño unificado"],
      },
      {
        name: "Modelo Personalizado",
        desc: "Consultá para personalización según tus necesidades.",
        img: cabana,
        highlights: ["Layout a medida", "Terminaciones premium", "Asesoramiento", "Diseño exclusivo"],
      },
    ],
  },
  {
    slug: "showroom",
    img: showroom,
    title: "Showroom & Comercio",
    detailTitle: "Urban Cubik",
    desc: "Espacios de exhibición premium para marcas que buscan destacarse.",
    detailSubtitle: "Viviendas móviles con terminaciones de primera calidad",
    features: ["Vidrieras amplias", "Iluminación LED", "Diseño personalizable", "Movilidad total"],
    models: [
      {
        name: "Interiores comedor",
        desc: "Superficie cubierta de 36m² con terminaciones de primera.",
        img: showroom,
        highlights: ["36m² cubiertos", "Iluminación LED", "Pisos premium", "Diseño moderno"],
      },
      {
        name: "Interior cocina",
        desc: "Cocina equipada con terminaciones de primera calidad.",
        img: hero,
        highlights: ["Bajo mesada", "Mesada de cuarzo", "Electrodomésticos", "Storage integrado"],
      },
      {
        name: "Interior dormitorio",
        desc: "Diseño de vanguardia para descanso premium.",
        img: lrc,
        highlights: ["Aislación acústica", "Climatización", "Iluminación cálida", "Placard incluido"],
      },
    ],
  },
  {
    slug: "obradores",
    img: p1,
    title: "Obradores & Logística",
    detailTitle: "Obradores & Logística",
    desc: "Módulos resistentes para obras, campamentos y operaciones en campo.",
    detailSubtitle: "Soluciones robustas para obras, campamentos y operaciones en campo",
    features: ["Alta durabilidad", "Stock inmediato", "Fácil traslado", "Costo eficiente"],
    models: [
      {
        name: "Obrador estándar",
        desc: "Listo para instalar en obra. Resistente y duradero.",
        img: p1,
        highlights: ["Alta resistencia", "Stock inmediato", "Fácil traslado", "Costo eficiente"],
      },
      {
        name: "Pañol de herramientas",
        desc: "Almacenamiento seguro en campo con cerraduras reforzadas.",
        img: boedo,
        highlights: ["Cerraduras reforzadas", "Estanterías internas", "Ventilación", "Anti-vandálico"],
      },
      {
        name: "Comedor de obra",
        desc: "Espacio equipado para personal en obra.",
        img: lrc,
        highlights: ["Mesas y bancos", "Bajo mesada", "Ventilación", "Iluminación LED"],
      },
    ],
  },
];
