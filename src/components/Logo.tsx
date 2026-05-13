import { Scale } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <Scale className="h-5 w-5 text-gold" strokeWidth={1.5} />
      <span className="font-accent text-base">
        <span className="text-gold font-bold">VERITAS</span>
        <span className="text-text-primary font-light ml-1">LAW</span>
      </span>
    </Link>
  );
}
