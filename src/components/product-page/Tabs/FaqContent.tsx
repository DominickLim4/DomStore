import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqsData: FaqItem[] = [
  {
    "question": "Qual é o material da camiseta?",
    "answer": "Forneça detalhes sobre o tipo de tecido (ex.: algodão, poliéster, mistura), peso e quaisquer características específicas."
  },
  {
    "question": "Quais são as instruções de cuidado para a camiseta?",
    "answer": "Descreva os métodos recomendados de lavagem, secagem e passagem para manter a qualidade e durabilidade."
  },
  {
    "question": "De que é feito o design ou estampa da camiseta?",
    "answer": "Explique o material usado para o design (ex.: vinil, serigrafia, bordado) e sua durabilidade."
  },
  {
    "question": "A camiseta é unissex ou projetada para gêneros específicos?",
    "answer": "Indique se a camiseta é adequada para homens e mulheres ou direcionada a um gênero específico."
  },
  {
    "question": "Quais são as opções e custos de envio?",
    "answer": "Forneça informações sobre os métodos de envio, prazos estimados de entrega e taxas associadas."
  },
  {
    "question": "Qual é a política de devolução da camiseta?",
    "answer": "Explique o prazo de devolução, as condições e os procedimentos para reembolso ou troca."
  },
  
];

const FaqContent = () => {
  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">
        Perguntas Frequentes
      </h3>
      <Accordion type="single" collapsible>
        {faqsData.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx + 1}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqContent;
