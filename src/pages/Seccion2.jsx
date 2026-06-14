import React from 'react';

//IMAGENES
import imgCafeOro from "../assets/CarruselDeProceso/CAFE EN ORO.png";
import imgCatacion from "../assets/CarruselDeProceso/CATACION.jpg.jpeg";
import imgPerfil from "../assets/CarruselDeProceso/PERFIL.jpg.jpeg";
import imgTueste from "../assets/CarruselDeProceso/TUESTE.jpg.jpeg";

const procesos = [
  { id: 1, title: "Café en oro", img: imgCafeOro },
  { id: 2, title: "Perfilado", img: imgPerfil },
  { id: 3, title: "Tueste", img: imgTueste },
  { id: 4, title: "Degustación", img: imgCatacion },
];

const Seccion2 = () => {
  return (
    <section className="w-full bg-[#0c0604] py-24 px-12 text-[#f5ede6]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-[#c9956a]">Nuestro Proceso</h2>
        <div className="w-24 h-1 bg-[#c9956a] mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {procesos.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-lg cursor-pointer">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Degradado para dar profundidad y que el texto resalte */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0604] via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-6 w-full text-center">
              <h3 className="text-xl font-serif text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Seccion2;