import React from "react";
import { FooterLinks } from "./footer.types";
import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinksData: FooterLinks[] = [
  {
    id: 1,
    title: "company",
    children: [
      {
        id: 11,
        label: "sobre",
        url: "#",
      },
      {
        id: 12,
        label: "funcionalidades",
        url: "#",
      },
      {
        id: 13,
        label: "trabalhos",
        url: "#",
      },
      {
        id: 14,
        label: "carreira",
        url: "#",
      },
    ],
  },
  {
    id: 2,
    title: "ajuda",
    children: [
      {
        id: 21,
        label: "suporte",
        url: "#",
      },
      {
        id: 22,
        label: "detalhes da entrega",
        url: "#",
      },
      {
        id: 23,
        label: "termos de uso",
        url: "#",
      },
      {
        id: 24,
        label: "politica de privacidade",
        url: "#",
      },
    ],
  },
  {
    id: 3,
    title: "faq",
    children: [
      {
        id: 31,
        label: "conta",
        url: "#",
      },
      {
        id: 32,
        label: "gerenciar entregas",
        url: "#",
      },
      {
        id: 33,
        label: "pedidos",
        url: "#",
      },
      {
        id: 34,
        label: "pagamentos",
        url: "#",
      },
    ],
  },
  {
    id: 4,
    title: "recursos",
    children: [
      {
        id: 41,
        label: "Livros Gratuitos",
        url: "#",
      },
      {
        id: 42,
        label: "Tutorial",
        url: "#",
      },
      {
        id: 43,
        label: "Como fazer um blog",
        url: "#",
      },
      {
        id: 44,
        label: "Playlist Youtube",
        url: "#",
      },
    ],
  },
];

const LinksSection = () => {
  return (
    <>
      {footerLinksData.map((item) => (
        <section className="flex flex-col mt-5" key={item.id}>
          <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
            {item.title}
          </h3>
          {item.children.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className={cn([
                link.id !== 41 && link.id !== 43 && "capitalize",
                "text-black/60 text-sm md:text-base mb-4 w-fit",
              ])}
            >
              {link.label}
            </Link>
          ))}
        </section>
      ))}
    </>
  );
};

export default LinksSection;
