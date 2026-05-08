import oficina from "@/assets/box/oficina.png";
import vivienda from "@/assets/box/vivienda.png";
import sanitario from "@/assets/box/sanitario.png";
import expandible from "@/assets/box/expandible.jpeg";
import showroom from "@/assets/box/showroom.jpeg";
import p1 from "@/assets/box/p1.jpg";

export type ModuloModel = {
  name: string;
  desc: string;
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
      { name: "Oficina Chica 15m²", desc: "Espacio para 1-2 personas, estandarizadas" },
      { name: "Oficina Grande 30m²", desc: "Capacidad para 3-4 personas, estandarizadas" },
      { name: "Oficina Personalizada", desc: "Contanos tu necesidad y te lo cotizamos" },
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
      { name: "Oficina 15m²", desc: "Espacio para 1-2 personas, estandarizadas" },
      { name: "Laboratorios", desc: "Dormitorio separado, cocina equipada y baño completo" },
      { name: "Pañoles obrador", desc: "Para construcciones, estandarizados" },
      { name: "Sanitarios", desc: "Baño completo" },
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
      { name: "Baño personalizado", desc: "Consultá por diseño personalizado según tus necesidades" },
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
      { name: "Modelo Comercial", desc: "Estandarizado, listo para instalar" },
      { name: "Modelo Personalizado", desc: "Consultá para personalización según tus necesidades" },
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
      { name: "Interiores comedor", desc: "Superficie cubierta de 36m²" },
      { name: "Interior cocina", desc: "Terminaciones de primera calidad" },
      { name: "Interior dormitorio", desc: "Diseño de vanguardia" },
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
      { name: "Obrador estándar", desc: "Listo para instalar en obra" },
      { name: "Pañol de herramientas", desc: "Almacenamiento seguro en campo" },
      { name: "Comedor de obra", desc: "Espacio equipado para personal" },
    ],
  },
];
