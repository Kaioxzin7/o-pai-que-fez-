import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, Gift } from "lucide-react";
import banner from "@/assets/banner.png.asset.json";
import { menu } from "@/data/menu";
import { brand } from "@/lib/brand";
import { Reveal } from "@/components/site/Reveal";
import { PillButton } from "@/components/site/PillButton";
import { FeaturedRows } from "@/components/site/FeaturedRows";
import { Marquee } from "@/components/site/Marquee";
import { Preloader } from "@/components/site/Preloader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "O Pai Que Fez – Hamburgueria delivery em Ibirité" },
      { name: "description", content: "Bateu a fome? Chama o Pai! Hambúrgueres artesanais, combos e porções com delivery em Ibirité – MG." },
      { property: "og:title", content: "O Pai Que Fez – Hamburgueria delivery em Ibirité" },
      { property: "og:description", content: "Hambúrgueres artesanais com blend de 130g no pão brioche. Peça pela loja oficial." },
    ],
  }),
  component: Home,
});

const featuredIds = [4006479, 4006480, 4006481, 4006484, 4006478, 4006475];
const featured = featuredIds.map((id) => menu.find((m) => m.id === id)!).filter(Boolean);
const spotlight = menu.filter((m) => ["combos-do-pai", "porcoes"].includes(m.cat) || m.id === 4024870);

function Arrow() {
  return <ArrowDown className="mx-auto h-10 w-10" strokeWidth={1.25} />;
}

function Home() {
  return (
    <>
      <Preloader />
      {/* Hero */}
      <section className="section-paper relative flex min-h-svh flex-col items-center justify-center px-4 pb-24 pt-32 text-center">
        <Reveal onScroll={false} delay={2.4} className="max-w-5xl">
          <span className="block text-sm font-semibold uppercase tracking-[0.3em] text-paper-muted">{brand.tagline}</span>
          <h1 className="display-xl mt-4">Bateu a fome?</h1>
          <h1 className="display-xl text-gold [-webkit-text-stroke:1px_var(--paper-foreground)]">Chama o Pai!</h1>
        </Reveal>
        <Reveal onScroll={false} delay={2.8} className="mt-8 flex max-w-xl flex-col items-center gap-6">
          <p className="text-xl md:text-2xl">Blend bovino suculento, cheddar derretido e o molho especial do Pai no pão brioche selado na manteiga.</p>
          <PillButton href={brand.store} variant="dark">Ver cardápio e pedir</PillButton>
        </Reveal>
        <div className="absolute inset-x-0 bottom-0 flex justify-between p-4 text-sm font-medium text-paper-muted md:p-8">
          <span>© O Pai Que Fez</span>
          <span>( {brand.city} )</span>
        </div>
      </section>

      {/* Showreel -> brand banner */}
      <section className="bg-background">
        <a href={brand.store} target="_blank" rel="noopener noreferrer" className="block">
          <img src={banner.url} alt="Bateu a fome? Chama o Pai! – Prime Egg" className="aspect-[1280/466] w-full object-cover" />
        </a>
      </section>

      {/* Featured burgers */}
      <section className="section-paper px-4 pt-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-12 text-center">
          <Reveal><h2 className="display-lg">Os queridinhos</h2></Reveal>
          <Arrow />
          <Reveal><p className="text-xl md:text-2xl">Do Clássico ao Desafiador: hambúrgueres montados na hora, com blend de 130g e pão brioche selado na manteiga.</p></Reveal>
        </div>
        <FeaturedRows items={featured} />
        <div className="flex justify-center pb-28">
          <Link to="/cardapio" className="inline-flex min-h-12 items-center rounded-full bg-background px-8 font-display text-lg font-extrabold uppercase text-foreground">Ver cardápio completo</Link>
        </div>
      </section>

      {/* Spotlight */}
      <section className="bg-background py-24">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-8 px-4 text-center">
          <Reveal><h2 className="display-lg text-gold">Combos do Pai</h2></Reveal>
          <Reveal><p className="text-xl text-muted-foreground">Pra dividir com a família, a turma ou só com a sua fome.</p></Reveal>
        </div>
        <Marquee items={spotlight} />
      </section>

      {/* CTA card */}
      <section className="section-paper px-4 pb-28 pt-20">
        <div className="mx-auto grid max-w-5xl gap-8 py-10 md:grid-cols-2">
          <Reveal><p className="text-sm font-semibold uppercase tracking-[0.3em] text-paper-muted">Programa de fidelidade</p></Reveal>
          <Reveal className="flex flex-col items-start gap-6">
            <p className="text-2xl">Cada pedido na loja oficial vira pontos que podem ser trocados por recompensas como Mate Couro 1L, Egg Bacon, Combo Premium e até R$ 50 de desconto.</p>
            <PillButton href={brand.store} variant="dark">Começar a juntar pontos</PillButton>
          </Reveal>
        </div>
        <div className="mx-auto mt-10 max-w-5xl rounded-3xl bg-background p-8 text-foreground md:p-14">
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal><h3 className="text-6xl md:text-7xl">Feito pelo <span className="text-gold">Pai</span></h3></Reveal>
            <Reveal className="flex flex-col items-start gap-5">
              <p className="text-muted-foreground">Pedido mínimo de {brand.minimumOrder}. Aceitamos {brand.payments.join(", ").toLowerCase()}.</p>
              <p className="text-muted-foreground">
                {brand.hours.map((h) => `${h.days}: ${h.time}`).join(" · ")}
              </p>
              <PillButton href={brand.whatsapp}><Gift className="h-5 w-5" /> Falar no WhatsApp</PillButton>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
