import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
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
        <textarea name="mensaje" rows={5} required className="w-full bg-input border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary resize-none" placeholder="Contanos sobre tu proyecto..." />
      </div>
      <button disabled={sending} className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 font-display uppercase tracking-wider text-sm hover:bg-primary/90 transition disabled:opacity-50">
        {sending ? "Enviando..." : <>Enviar mensaje <Send className="w-4 h-4" /></>}
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-display uppercase tracking-wider mb-2">{label}</label>
      <input type={type} name={name} required={required} className="w-full bg-input border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary" />
    </div>
  );
}
