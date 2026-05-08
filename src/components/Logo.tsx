export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <div className="bg-primary text-primary-foreground px-3 py-1 font-display text-2xl tracking-tight">
        BOX<span className="italic font-bold">time</span>
      </div>
    </div>
  );
}
