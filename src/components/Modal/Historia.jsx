import React from 'react';

import logo from "../../assets/Logo.webp"; 
import espressoImg from "../../assets/expresso.jpeg";

const Historia = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity">
      
      {/* Contenedor  Modal */}
      <div className="bg-[#120905] border border-[#c9956a]/30 p-8 rounded-3xl w-[90%] max-w-lg shadow-2xl relative">
        
        {/* Botón de cierre */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-[#988476] hover:text-[#c9956a] transition"
        >
          ✕
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="NEBARO Logo" className="h-20 w-auto opacity-90" />
        </div>

        {/* Título */}
        <h2 className="text-3xl font-serif font-bold text-[#c9956a] mb-4 text-center">
          Nuestra Historia
        </h2>

        {/* Texto de la historia */}
        <div className="text-[#f5ede6] space-y-4 text-center">
          <p className="leading-relaxed">
            En <strong>NEBARO</strong>, nuestra pasión nace del respeto por la tierra y el grano. 
            Lo que comenzó como un pequeño sueño de transformar el café en un ritual, 
            hoy se ha convertido en una experiencia compartida.
          </p>
          <br></br>
          <p className="leading-relaxed text-[#988476]">
            Cada taza cuenta una historia de dedicación, desde los cafetales hasta tus manos, 
            buscando siempre la perfección en cada proceso.
          </p>
          
          {/* Imagen */}
            <div className="pt-4 pb-2">
            <img 
                src={espressoImg} 
                alt="Café Espresso" 
                className="w-full h-48 object-cover rounded-2xl border border-[#c9956a]/20 shadow-xl opacity-90"
            />
            </div>
        </div>

        {/* Botón de acción */}
        <button
          onClick={onClose}
          className="mt-8 w-full bg-[#c9956a] hover:bg-[#a87a56] text-[#0c0604] font-semibold py-3 rounded-xl transition duration-300"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Historia;