import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  gold: "bg-gold text-primary-foreground shadow-glow",
  dark: "bg-background text-foreground",
  outline: "border border-current bg-transparent",
};

export function PillButton({
  href,
  children,
  variant = "gold",
  external = true,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex min-h-12 items-center gap-3 rounded-full py-2 pl-6 pr-2 font-display text-lg font-extrabold uppercase tracking-wide transition-transform duration-300 hover:-translate-y-0.5",
        variants[variant],
        className,
      )}
    >
      {children}
      <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground/10 transition-transform duration-300 group-hover:rotate-45">
        <ArrowUpRight className="h-5 w-5" />
      </span>
    </a>
  );
}
