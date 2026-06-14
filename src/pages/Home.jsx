import { useState } from "react";
import Historia from "../components/Modal/Historia";
import Comprar from "../components/Modal/Comprar";
import coffeeHeroImg from "../assets/taza.jpg";

{/* Para la seccion1*/}
import Seccion1 from "./Seccion1";
{/* Para la seccion2*/}
import Seccion2 from "./Seccion2";

const Home = () => {
  const [isRecomOpen, setIsRecomOpen] = useState(false);
  const [isSobreOpen, setIsSobreOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#0c0604] text-[#f5ede6] font-sans flex flex-col">
      
      {/* Navegación superpuesta */}
      <nav className="relative z-10 flex justify-between items-center px-12 py-6 border-b border-white/5">
        <span className="text-2xl font-serif tracking-wider">
          NEBA<span className="text-[#c9956a]">RO</span>
        </span>
        <div className="flex gap-8 text-sm uppercase tracking-widest text-[#d4b89a]">
          <a href="#" className="hover:text-white transition">Inicio</a>
          <a href="#" className="hover:text-white transition">Menú</a>

          <button
            onClick={() => setIsRecomOpen(true)}
            className="text-[#c9956a] border border-[#3a2518] px-4 py-2 rounded-full hover:bg-[#3a2518]/50 transition"
          >
            Ver Recomendación
          </button>
        </div>
      </nav>

      <section className="relative flex-1 flex items-center justify-start min-h-[calc(100vh-85px)]">
        
        {/* Contenedor de la Imagen y el Filtro Oscuro */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={coffeeHeroImg}
            alt="Café artesanal"
            className="w-full h-full object-cover object-right"
          />
          {/* Degradado que funde el lado izquierdo a negro puro */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0604] via-[#0c0604]/90 to-transparent"></div>
        </div>

        {/* TEXTO, BOTONES (Forzados a la izquierda) */}
        <div className="relative z-10 flex flex-col justify-center items-start text-left px-12 w-full max-w-2xl mr-auto">
          <p className="italic text-[#c9956a] text-xl mb-4 font-serif text-left">
            Rico. Suave. Perfecto.
          </p>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6 font-serif text-left">
            Experimenta el<br />Café Como<br />
            <span className="text-[#c9956a]">Nunca Antes</span>
          </h1>
          <p className="text-[#988476] mb-10 max-w-md text-lg text-left">
            Café artesanal elaborado con los mejores granos, preparado a la perfección para ti.
          </p>
            <br></br>
            <br></br>

          {/* BOTONES MODALES (Alineados a la izquierda) */}
          <div className="flex gap-4 mb-14 w-full justify-start">
            <button
              onClick={() => setIsRecomOpen(true)}
              className="bg-[#9D7153] text-[#0c0604] font-semibold px-8 py-3.5 rounded-full hover:bg-[#b08364] transition flex items-center gap-2"
            >
              Historia 
            </button>
            <button
              onClick={() => setIsSobreOpen(true)}
              className="border border-[#9D7153] text-[#f5ede6] px-8 py-3.5 rounded-full hover:bg-[#9D7153]/10 transition flex items-center gap-2"
            >
              Comprar Ahora 
            </button>
          </div>

          {/* ICONOS Inferiores (Alineadas a la izquierda) */}
          
          <div className="flex gap-10 w-full justify-start">
            {[
              { title: "Premium", sub: "Quality Beans" },
              { title: "Expertly", sub: "Roasted" },
              { title: "Made With", sub: "Love" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-full border border-[#9D7153]/40 flex items-center justify-center text-[#c9956a] text-sm shrink-0">
                  ☕
                </div>
                <div>
                  <p className="text-[#f5ede6] text-sm font-semibold m-0">{item.title}</p>
                  <p className="text-[#988476] text-xs m-0">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        <Seccion1 />
        <Seccion2 />

      <Historia isOpen={isRecomOpen} onClose={() => setIsRecomOpen(false)} />
      <Comprar isOpen={isSobreOpen} onClose={() => setIsSobreOpen(false)} />
    </div>
  );
};

export default Home;