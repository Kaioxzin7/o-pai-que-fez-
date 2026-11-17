import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg.asset.json";
import { brand } from "@/lib/brand";

export function SiteFooter() {
  return (
    <footer className="bg-background px-4 pb-6 pt-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo.url} alt="Logo O Pai Que Fez" className="h-28 w-28 rounded-2xl object-contain" />
          <p className="mt-6 max-w-sm text-lg text-muted-foreground">
            Hambúrgueres artesanais com blend bovino de 130g, cheddar derretido e o molho especial do Pai no pão brioche selado na manteiga.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-2xl text-primary">Navegue</h4>
          <Link to="/" className="block hover:text-primary">Início</Link>
          <Link to="/cardapio" className="block hover:text-primary">Cardápio</Link>
          <Link to="/contato" className="block hover:text-primary">Contato</Link>
          <a href={brand.store} target="_blank" rel="noopener noreferrer" className="block hover:text-primary">Loja oficial</a>
        </div>
        <div className="space-y-3">
          <h4 className="text-2xl text-primary">Fale com o Pai</h4>
          <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><MessageCircle className="h-4 w-4" /> {brand.phone}</a>
          <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><Instagram className="h-4 w-4" /> {brand.instagramHandle}</a>
          <a href={brand.maps} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-primary"><MapPin className="mt-1 h-4 w-4 shrink-0" /> {brand.address}, {brand.city}</a>
        </div>
      </div>
      <p className="mt-16 select-none text-center font-display text-[17vw] font-black uppercase leading-none text-gold">O Pai Que Fez</p>
      <div className="mx-auto mt-6 flex max-w-7xl flex-col justify-between gap-2 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} O Pai Que Fez · CNPJ {brand.cnpj}</span>
        <span>{brand.tagline} · {brand.city}</span>
      </div>
    </footer>
  );
}
