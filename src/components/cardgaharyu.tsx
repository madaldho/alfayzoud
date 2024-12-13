'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react'

const product = {
  id: 1,
  name: "عود العود \"أكواليريا مالاكنسيس\"، أصله من منطقة سومطرة",
  description: "Huile d'agar pure et aromatique, originaire de Sumatra",
  prices: [
    { amount: 5, price: 175 },
    { amount: 10, price: 330 },
    { amount: 15, price: 450 },
  ],
  pricePerGram: "30-35 MAD/g",
  images: [
    "/alami1.webp",
    "/alami2.webp",
    "/alami3.webp",
    "/alami4.webp",
    "/alami5.webp",
    "/alami6.webp",
    "/alami7.webp",
  ],
  rating: 5,
}

export default function GaharuShowcase() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedPrice, setSelectedPrice] = useState(product.prices[0]) // Default pilihan pertama

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length)
  }

  const handleOrder = () => {
    const message = encodeURIComponent(
      `Bonjour, je suis intéressé par ${product.name}. J'aimerais commander ${selectedPrice.amount} grammes au prix de ${selectedPrice.price} MAD. Voici une image du produit: ${window.location.origin}${product.images[currentImageIndex]}`
    )
    window.open(`https://wa.me/212716164271?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow flex flex-col justify-center items-center md:p-8 p-3">
        <h2 className="text-3xl font-bold text-center mb-8 md:px-16 pt-16">
          <span className="text-amber-800 hover:text-amber-600 transition-colors duration-300">
            Nos Produits 
          </span>{" "}
          <span className="text-black hover:text-gray-700 transition-colors duration-300">
            d'Agarwood
          </span>
        </h2>
        <div id='gaharu'  className="max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden ">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2 relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={product.images[currentImageIndex]}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
              </AnimatePresence>
              <div className="absolute top-4 left-4 bg-[#8c6d5b] text-white px-2 py-1 rounded-full text-sm font-semibold">
                Produit Vedette
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  onClick={prevImage}
                  className="bg-white/50 hover:bg-white/75 p-2 rounded-r-lg transition-colors duration-300"
                  aria-label="Image précédente"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  onClick={nextImage}
                  className="bg-white/50 hover:bg-white/75 p-2 rounded-l-lg transition-colors duration-300"
                  aria-label="Image suivante"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-4 h-4 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Aller à l'image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-lg mb-4">{product.description}</p>
                <div className="mb-6">
                  <p className="text-xl font-semibold mb-2">Prix :</p>
                  <ul className="list-disc list-inside space-y-2">
                    {product.prices.map((price, index) => (
                      <li key={index}>
                        <label className="inline-flex items-center space-x-2">
                          <input
                            type="radio"
                            name="price"
                            value={price.amount}
                            checked={selectedPrice.amount === price.amount}
                            onChange={() => setSelectedPrice(price)}
                            className="form-radio text-[#8c6d5b] focus:ring-[#8c6d5b]"
                          />
                          <span className="text-lg">{price.amount}g : {price.price} MAD</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-600 mt-2">
                    Prix par gramme : {product.pricePerGram}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <motion.button
                  className="w-full bg-[#8c6d5b] text-white py-3 px-6 rounded-lg text-xl font-semibold hover:bg-[#725a4b] transition-colors duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOrder}
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span>Acheter Maintenant</span>
                </motion.button>
                <p className="text-sm text-center text-gray-500">
                  Contactez-nous via WhatsApp pour toute demande d'achat
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
