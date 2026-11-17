import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, MessageCircle, Wallet } from "lucide-react";
import { brand } from "@/lib/brand";
import { Reveal } from "@/components/site/Reveal";
import { PillButton } from "@/components/site/PillButton";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato – O Pai Que Fez" },
      { name: "description", content: "WhatsApp, Instagram, endereço e horários d'O Pai Que Fez em Ibirité – MG." },
      { property: "og:title", content: "Contato – O Pai Que Fez" },
      { property: "og:description", content: "Fale com O Pai Que Fez pelo WhatsApp ou Instagram." },
    ],
  }),
  component: Contato,
});

function Contato() {
  const blocks = [
    { icon: MessageCircle, title: "WhatsApp", body: brand.phone, href: brand.whatsapp },
    { icon: Instagram, title: "Instagram", body: brand.instagramHandle, href: brand.instagram },
    { icon: MapPin, title: "Endereço", body: `${brand.address}, ${brand.city}`, href: brand.maps },
  ];
  return (
    <section className="min-h-svh bg-background px-4 pb-28 pt-36 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal onScroll={false}>
          <h1 className="display-xl">Fala com</h1>
          <h1 className="display-xl text-gold">o Pai</h1>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {blocks.map((b) => (
            <a key={b.title} href={b.href} target="_blank" rel="noopener noreferrer" className="group rounded-3xl border border-border bg-card p-8 transition-colors hover:border-primary">
              <b.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-6 text-4xl">{b.title}</h3>
              <p className="mt-2 text-muted-foreground group-hover:text-foreground">{b.body}</p>
            </a>
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-card p-8">
            <Clock className="h-8 w-8 text-primary" />
            <h3 className="mt-6 text-4xl">Horários</h3>
            {brand.hours.map((h) => (
              <p key={h.days} className="mt-2 flex justify-between border-b border-border py-2 text-muted-foreground"><span>{h.days}</span><span className="text-foreground">{h.time}</span></p>
            ))}
          </div>
          <div className="rounded-3xl bg-card p-8">
            <Wallet className="h-8 w-8 text-primary" />
            <h3 className="mt-6 text-4xl">Pagamento</h3>
            <p className="mt-4 text-muted-foreground">{brand.payments.join(" · ")}</p>
            <p className="mt-2 text-muted-foreground">Pedido mínimo: {brand.minimumOrder}</p>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap gap-4">
          <PillButton href={brand.store}>Pedir na loja oficial</PillButton>
          <PillButton href={brand.whatsapp} variant="outline">Chamar no WhatsApp</PillButton>
        </div>
      </div>
    </section>
  );
}
