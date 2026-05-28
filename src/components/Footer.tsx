import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 text-muted-foreground max-w-sm">
            Soluciones innovadoras en construcción modular con containers para proyectos comerciales, residenciales e industriales.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-wider mb-4">Navegación</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/modulos" className="hover:text-primary">Módulos</Link></li>
            <li><Link to="/nosotros" className="hover:text-primary">Nosotros</Link></li>
            <li><Link to="/proceso" className="hover:text-primary">Proceso</Link></li>
            <li><Link to="/proyectos" className="hover:text-primary">Proyectos</Link></li>
            <li><Link to="/contacto" className="hover:text-primary">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-wider mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary"/> +54 9 2615 43-9128</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary"/> ventas@boxtimeweb.com</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary"/> Mendoza, Argentina</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} BOXtime Construcción Modular. Todos los derechos reservados.
      </div>
    </footer>
  );
}
