import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const url = `https://wa.me/5492615439128?text=${encodeURIComponent(
    "Hola! Quiero hacer una consulta sobre los módulos de BOXtime."
  )}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition hover:scale-105"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
