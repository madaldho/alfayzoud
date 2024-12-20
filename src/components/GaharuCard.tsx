import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

interface GaharuCardProps {
  name: string;
  image: string;
  price: string;
  description: string;
  isSold: boolean;
}

const GaharuCard: React.FC<GaharuCardProps> = ({
  name,
  image,
  price,
  description,
  isSold,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [origin, setOrigin] = useState(""); // State untuk menyimpan origin

  useEffect(() => {
    // Dapatkan window.location.origin di browser
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const whatsappLink = `https://wa.me/212716164271?text=${encodeURIComponent(
    `Bonjour, je suis intéressé par le produit "${name}".\nVoici une image du produit : ${origin}${image}`
  )}`;

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          loading="lazy"
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <span
          className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold rounded ${
            isSold ? "bg-gray-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          {isSold ? "SOLD" : "SALE"}
        </span>
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition duration-300"
            >
              <Icon icon="mdi:whatsapp" className="w-6 h-6" />
              <span> Sifto f WhatsApp</span>
            </a>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-black mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-amber-700 font-bold mb-4">{price}</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#4a3728] text-white text-center px-6 py-3 font-bold rounded-3xl hover:bg-green-600 transition space-x-3"
        >
          <Icon icon="mdi:whatsapp" className="w-5 h-5 md:w-6 md:h-6" />
          <span className="text-sm md:text-base">Acheter Maintenant</span>
        </a>
      </div>
    </div>
  );
};

export default GaharuCard;
