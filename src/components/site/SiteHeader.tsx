import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg.asset.json";
import { brand } from "@/lib/brand";

const links = [
  { to: "/", label: "Início" },
  { to: "/cardapio", label: "Cardápio" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" aria-label="O Pai Que Fez – início" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Logo O Pai Que Fez" className="h-14 w-14 rounded-xl object-contain ring-1 ring-border md:h-16 md:w-16" />
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-border bg-background/80 p-1 backdrop-blur md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-5 py-2 font-display text-lg font-bold uppercase text-foreground transition-colors hover:text-primary"
              activeProps={{ className: "bg-primary !text-primary-foreground" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <a href={brand.store} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-5 py-2 font-display text-lg font-extrabold uppercase text-primary-foreground">
            Pedir agora
          </a>
        </nav>
        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
          className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-background px-6 pb-10 pt-28 transition-[clip-path] duration-700 ease-[cubic-bezier(.8,0,.2,1)] md:hidden ${open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"}`}
      >
        <nav className="flex flex-col gap-2">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="font-display text-6xl font-black uppercase text-foreground" activeProps={{ className: "text-gold" }} activeOptions={{ exact: true }}>
              {l.label}
            </Link>
          ))}
          <a href={brand.store} target="_blank" rel="noopener noreferrer" className="font-display text-6xl font-black uppercase text-primary">Pedir agora</a>
        </nav>
        <div className="flex items-center justify-between text-muted-foreground">
          <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><Instagram className="h-5 w-5" /> {brand.instagramHandle}</a>
          <span>{brand.city}</span>
        </div>
      </div>
    </>
  );
}
