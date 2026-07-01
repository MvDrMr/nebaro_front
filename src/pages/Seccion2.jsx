import { useState } from "react";

import imgCafeOro from "../assets/CarruselDeProceso/CafeOro.webp";
import imgCatacion from "../assets/CarruselDeProceso/Catacion.webp";
import imgPerfil from "../assets/CarruselDeProceso/Perfil.webp";
import imgTueste from "../assets/CarruselDeProceso/Tueste.webp";

const procesos = [
  { id: 1, title: "Café en oro", img: imgCafeOro, descripcion: "Granos de café verde cuidadosamente seleccionados en origen, provenientes de Huehuetenango, Guatemala. Cada lote es evaluado por su calidad, uniformidad y perfil sensorial antes del proceso de tueste." },
  { id: 2, title: "Perfilado", img: imgPerfil, descripcion: "Proceso de perfilado del tueste donde cada grano desarrolla sus aromas, cuerpo y notas sensoriales características. Este paso es fundamental para resaltar el perfil único del café de especialidad NEBARO." },
  { id: 3, title: "Tueste", img: imgTueste, descripcion: "Etapa final del proceso de tueste donde los granos alcanzan su desarrollo óptimo de aroma, color y sabor. Cada lote es monitoreado cuidadosamente para garantizar un perfil balanceado y consistente en cada taza de NEBARO." },
  { id: 4, title: "Degustación", img: imgCatacion, descripcion: "Proceso de catación y evaluación sensorial donde cada taza es analizada cuidadosamente para identificar aroma, cuerpo, acidez y notas características. Este control permite garantizar la calidad y consistencia del perfil de NEBARO Specialty Coffee." }
];

const Seccion2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= procesos.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? procesos.length - 1 : prev - 1
    );
  };

  const visibles = [];

  for (let i = 0; i < 2; i++) {
    visibles.push(
      procesos[(currentIndex + i) % procesos.length]
    );
  }

  return (
    <section className="w-full bg-[#0c0604] py-12 md:py-24 px-4 md:px-12 text-[#f5ede6]">

      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#c9956a]">
          Nuestro Proceso
        </h2>

        <div className="w-24 h-1 bg-[#c9956a] mx-auto mt-4"></div>
      </div>

      <div className="flex items-center gap-4">

        {/* Flecha izquierda */}
        <button
          onClick={prevSlide}
          className="shrink-0 text-3xl text-[#c9956a]"
        >
          ←
        </button>

        {/* Carrusel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">

          {visibles.map((item) => (
            <div
              key={item.id}
              className="
                bg-[#120905]
                rounded-xl
                overflow-hidden
                border border-[#c9956a]/20
              "
            >
              <img
                src={item.img}
                alt={item.title}
                className="
                  w-full
                  h-64 md:h-[450px]
                  object-cover
                "
              />

              <div className="p-6">

                <h3 className="text-2xl font-serif text-[#c9956a]">
                  {item.title}
                </h3>

                <button
                  className="
                    mt-3
                    text-sm
                    underline
                    text-[#988476]
                    hover:text-[#c9956a]
                  "
                  onClick={() =>
                    setExpandedCard(
                      expandedCard === item.id
                        ? null
                        : item.id
                    )
                  }
                >
                  {expandedCard === item.id
                    ? "Ocultar descripción"
                    : "Ver descripción"}
                </button>

                {expandedCard === item.id && (
                  <p className="mt-4 text-[#f5ede6] leading-relaxed">
                    {item.descripcion}
                  </p>
                )}

              </div>
            </div>
          ))}

        </div>

        {/* Flecha derecha */}
        <button
          onClick={nextSlide}
          className="shrink-0 text-3xl text-[#c9956a]"
        >
          →
        </button>

      </div>

    </section>
  );
};

export default Seccion2;