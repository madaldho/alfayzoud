import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Qu'est-ce que l'Oud et pourquoi est-il précieux ?",
    answer: "L'Oud, également connu sous le nom de bois d'agar, est un bois résineux rare utilisé dans la parfumerie et les rituels spirituels. Il est précieux pour son arôme riche et complexe, ainsi que pour sa rareté, car il provient d'arbres infectés naturellement par un champignon.",
  },
  {
    question: "Comment peut-on utiliser l'Oud ?",
    answer: "L'Oud peut être utilisé comme encens, en huile essentielle ou en copeaux de bois. Il est souvent brûlé pour son parfum, utilisé dans les cérémonies religieuses, ou encore distillé pour produire des parfums exclusifs.",
  },
  {
    question: "Pourquoi l'Oud est-il si cher ?",
    answer: "L'Oud est cher en raison de sa rareté et du temps qu'il faut pour qu'un arbre infecté produise cette résine précieuse. De plus, le processus d'extraction est complexe et nécessite une expertise spécialisée.",
  },
  {
    question: "D'où vient l'Oud ?",
    answer: "L'Oud provient principalement des forêts tropicales en Asie du Sud-Est, notamment en Inde, au Cambodge, en Malaisie et en Indonésie. Chaque région produit un Oud avec des caractéristiques uniques.",
  },
  {
    question: "L'Oud a-t-il des bienfaits pour la santé ?",
    answer: "Oui, l'Oud est connu pour ses propriétés apaisantes et méditatives. Il est utilisé en aromathérapie pour réduire le stress, favoriser la relaxation et améliorer la clarté mentale.",
  },


];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prevOpenItems =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter(item => item !== index)
        : [...prevOpenItems, index]
    );
  };

  return (
    <section id="faq" className="py-16 md:px-40  bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-amber-800 hover:text-amber-600 transition-colors duration-300">
        Questions Courantes 
          </span>{" "}
          <span className="text-black hover:text-gray-700 transition-colors duration-300">
          sur le Oud
          </span>
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium text-lg">{item.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${openItems.includes(index) ? 'transform rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {openItems.includes(index) && (
                <div className="p-4 bg-white">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

