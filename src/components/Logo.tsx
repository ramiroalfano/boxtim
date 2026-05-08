import logoSrc from "@/assets/box/logo-boxtime.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img src={logoSrc} alt="BOXtime Construcción Modular" className={`h-10 w-auto ${className}`} />
  );
}
