import React, { useState } from "react";
import GaharuCard from "./GaharuCard";

const gaharu = [
  {
    id: 1,
    name: "العود القماري المحسن مروكي",
    image: "/sintesisgaharyu (1).webp",
    price: "10 DH/gramme",
    description: "Un oud de qualité supérieure avec un arôme puissant et durable.",
    isSold: true,
  },
  {
    id: 2,
    name: "العود القماري المحسن كلمنتان",
    image: "/sintesisgaharyu (2).webp",
    price: "10 DH/gramme",
    description: "Récolté directement des forêts de Kalimantan, avec un arôme unique, parfait pour la thérapie.",
    isSold: true,
  },
  {
    id: 3,
    name: "العود القماري المحسن كلمنتان",
    image: "/sintesisgaharyu (3).webp",
    price: "10 DH/gramme",
    description: "Un arôme doux et élégant, idéal pour la production de parfums.",
    isSold: false,
  },
  {
    id: 4,
    name: "العود القماري المحسن كلمنتان",
    image: "/sintesisgaharyu (4).webp",
    price: "10 DH/gramme",
    description: "Un parfum exclusif utilisé pour la méditation et la spiritualité.",
    isSold: false,
  },
  {
    id: 5,
    name: "العود القماري المحسن سومطرة",
    image: "/sintesisgaharyu (5).webp",
    price: "10 DH/gramme",
    description: "Un oud sélectionné avec un arôme unique provenant de Sumatra.",
    isSold: false,
  },
  {
    id: 6,
    name: "العود القماري المحسن مروكي",
    image: "/sintesisgaharyu (6).webp",
    price: "10 DH/gramme",
    description: "Un oud premium de haute qualité originaire de Sumatra.",
    isSold: false,
  },
  {
    id: 7,
    name: "العود القماري المحسن مروكي",
    image: "/sintesisgaharyu (7).webp",
    price: "10 DH/gramme",
    description: "Un oud authentique d'Aceh avec un arôme distinctif et exclusif.",
    isSold: false,
  },
];



const GaharuSection: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const filteredGaharu =
    filter === "all"
      ? gaharu
      : gaharu.filter((item) => item.isSold === (filter === "sold"));

  return (
    <section id="gaharu" className="py-16 bg-gray-100 ">
      <div className="container mx-auto px-2 md:px-6">
       
      

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-2">
          {filteredGaharu.map((item) => (
            <GaharuCard
              key={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
              isSold={item.isSold}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaharuSection;
