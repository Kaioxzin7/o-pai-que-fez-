// Official info gathered from opaiquefez.com.br and Instagram @opai_que_fez
export const brand = {
  name: "O Pai Que Fez",
  tagline: "Fast Food Delivery",
  store: "https://opaiquefez.com.br/o_pai_que_fez",
  instagram: "https://www.instagram.com/opai_que_fez/",
  instagramHandle: "@opai_que_fez",
  whatsapp: "https://wa.me/5531996833080",
  phone: "(31) 99683-3080",
  address: "R. Braúna, 20 – Serra Dourada",
  city: "Ibirité – MG",
  maps: "https://www.google.com/maps/search/?api=1&query=-20.0059063,-44.0707126",
  cnpj: "37.340.535/0001-11",
  minimumOrder: "R$ 25,00",
  hours: [
    { days: "Domingo a quinta", time: "14h às 23h30" },
    { days: "Sexta e sábado", time: "14h às 23h59" },
  ],
  payments: ["Cartão de crédito", "Cartão de débito", "Dinheiro", "Pix"],
};

export const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
