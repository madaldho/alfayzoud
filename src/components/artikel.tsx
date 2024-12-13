import React, { useState } from "react";
import { marked } from "marked";
import isiartikel from "./isiartikel"; // Import the article content
import { Icon } from "@iconify/react"; // Import Iconify React component

const Artikel: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Convert Markdown to HTML
  const contentHtml = marked(isiartikel);

  return (
    <section className="py-8 px-6 bg-white">
      <div className="container mx-auto">
        <div
          className={`relative text-gray-700 ${
            isExpanded ? "max-h-full" : "max-h-40"
          } overflow-hidden transition-all duration-300`}
        >
          <div
            className="prose container mx-auto"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          ></div>
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent"></div>
          )}
        </div>
        <div className="mt-4 flex justify-center">
          <button
            onClick={toggleExpand}
            className="text-amber-600 font-semibold hover:underline flex items-center"
          >
            {isExpanded ? "Réduire" : "Plus de détails"}
            <Icon
              icon={isExpanded ? "iconamoon:arrow-up-2-bold" : "iconamoon:arrow-down-2-bold"}
              className="ml-2 text-amber-600 w-6 h-6"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Artikel;
