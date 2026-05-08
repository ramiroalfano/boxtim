import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — BOXtime" },
      { name: "description", content: "Contactanos para tu proyecto de construcción modular en Mendoza." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("¡Mensaje enviado! Te contactaremos pronto.");
      (e.target as HTMLFormElement).reset();
      setSending(false);
    }, 800);
  };

  return (
    <>
      <Toaster />
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary font-display uppercase tracking-widest text-sm mb-3">Contacto</p>
          <h1 className="font-display text-5xl md:text-7xl">¿Listo para<br/><span className="text-primary">tu proyecto?</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Contanos qué tenés en mente y te respondemos en menos de 24hs.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12">
          <div className="space-y-8">
            <div>
              <Phone className="w-6 h-6 text-primary mb-2"/>
              <div className="font-display text-lg">Teléfono</div>
              <div className="text-muted-foreground">+54 261 555-0123</div>
            </div>
            <div>
              <Mail className="w-6 h-6 text-primary mb-2"/>
              <div className="font-display text-lg">Email</div>
              <div className="text-muted-foreground">info@boxtime.com.ar</div>
            </div>
            <div>
              <MapPin className="w-6 h-6 text-primary mb-2"/>
              <div className="font-display text-lg">Ubicación</div>
              <div className="text-muted-foreground">Mendoza, Argentina</div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-card border border-border p-8 space-y-5" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nombre completo" name="nombre" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Teléfono" name="telefono" />
              <div>
                <label className="block text-sm font-display uppercase tracking-wider mb-2">Tipo de proyecto</label>
                <select name="tipo" className="w-full bg-input border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary">
                  <option>Oficina</option>
                  <option>Vivienda</option>
                  <option>Comercio</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-display uppercase tracking-wider mb-2">Mensaje</label>
              <textarea name="mensaje" rows={5} required className="w-full bg-input border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary resize-none" placeholder="Contanos sobre tu proyecto..."/>
            </div>
            <button disabled={sending} className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 font-display uppercase tracking-wider text-sm hover:bg-primary/90 transition disabled:opacity-50">
              {sending ? "Enviando..." : <>Enviar mensaje <Send className="w-4 h-4"/></>}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-display uppercase tracking-wider mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-input border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary"
      />
    </div>
  );
}
