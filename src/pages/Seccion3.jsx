import { useState } from "react";

import imgExpresso from "../assets/CarruselPreparacion/Expresso.webp";
import imgUV60 from "../assets/CarruselPreparacion/UV60.webp";
import imgPrensaFrancesa from "../assets/PrensaFrancesa.webp";

const procesos = [
  {
    id: 1,
    title: "V60",
    img: imgUV60,
    recomendaciones:
      "Café: 20 g\nAgua: 300 ml\n Temperatura: 90°–94°C\n Molienda: Media\n Tiempo: 2:30 – 3:00 min",
    preparacion:
      "1. Coloca el filtro y enjuágalo con agua caliente.\n\n2. Agrega los 20 g de café molido.\n\n3. Vierte 40 ml de agua para la preinfusión durante 30 segundos.\n\n4. Continúa vertiendo el resto del agua lentamente en movimientos circulares.\n\n5. Espera a que termine el filtrado.\n\n6. Sirve y disfruta."
  },
  {
    id: 2,
    title: "Prensa Francesa",
    img: imgPrensaFrancesa,
    recomendaciones:
      "Café: 30 g\nAgua: 500 ml\n Temperatura: 92°–95°C\n Molienda: Gruesa\n Tiempo: 4 minutos",
    preparacion:
      "1. Agrega el café molido a la prensa.\n\n2. Vierte el agua caliente lentamente.\n\n3. Mezcla suavemente.\n\n4. Coloca la tapa sin presionar.\n\n5. Espera 4 minutos.\n\n6. Presiona lentamente el émbolo.\n\n7. Sirve inmediatamente."
  },
  {
    id: 3,
    title: "Espresso",
    img: imgExpresso,
    recomendaciones:
      "Café: 18–20 g\nRendimiento: 36–40 g\n Temperatura: 90°–93°C\n Molienda: Fina\n Tiempo: 25–30 segundos",
    preparacion:
      "1. Muele el café fino y uniforme.\n\n2. Distribuye y compacta el café correctamente.\n\n3. Inserta el portafiltro.\n\n4. Inicia la extracción.\n\n5. Detén la extracción entre 25–30 segundos.\n\n6. Sirve inmediatamente."
  }
];

const recomendacionGeneral =
  "Utiliza siempre agua filtrada y café recién molido para obtener la mejor experiencia en taza.";

const Seccion3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState({});

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

      {/* Encabezado */}
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#c9956a]">
          Métodos de Preparación
        </h2>

        <div className="w-24 h-1 bg-[#c9956a] mx-auto mt-4"></div>
      </div>

      {/* Carrusel */}
      <div className="flex items-center justify-center gap-2 md:gap-4">

        {/* Flecha izquierda */}
        <button
          onClick={prevSlide}
          className="
            shrink-0
            w-10
            h-10
            md:w-12
            md:h-12
            rounded-full
            border
            border-[#c9956a]/30
            text-[#c9956a]
            hover:bg-[#c9956a]
            hover:text-[#0c0604]
            transition
          "
        >
          ←
        </button>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">

          {visibles.map((item) => (
            <div
              key={item.id}
              className="
                bg-[#120905]
                rounded-2xl
                overflow-hidden
                border border-[#c9956a]/20
                shadow-xl
              "
            >
              <img
                src={item.img}
                alt={item.title}
                className="
                  w-full
                  h-64
                  md:h-80
                  lg:h-[420px]
                  object-cover
                "
              />

              <div className="p-5 md:p-6">

                <h3 className="text-2xl font-serif text-[#c9956a] mb-4">
                  {item.title}
                </h3>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-4">

                  <button
                    onClick={() =>
                      setActiveTab({
                        ...activeTab,
                        [item.id]: "recomendaciones"
                      })
                    }
                    className={`px-4 py-2 rounded-full text-sm transition ${
                      (activeTab[item.id] || "recomendaciones") ===
                      "recomendaciones"
                        ? "bg-[#c9956a] text-[#0c0604]"
                        : "border border-[#c9956a]/30 text-[#c9956a]"
                    }`}
                  >
                    Recomendaciones
                  </button>

                  <button
                    onClick={() =>
                      setActiveTab({
                        ...activeTab,
                        [item.id]: "preparacion"
                      })
                    }
                    className={`px-4 py-2 rounded-full text-sm transition ${
                      activeTab[item.id] === "preparacion"
                        ? "bg-[#c9956a] text-[#0c0604]"
                        : "border border-[#c9956a]/30 text-[#c9956a]"
                    }`}
                  >
                    Preparación
                  </button>

                </div>

                {/* Contenido */}
                <div className="bg-[#0c0604]/50 rounded-xl p-4 min-h-[180px]">

                  {(activeTab[item.id] || "recomendaciones") ===
                  "recomendaciones" ? (
                    <p className="text-[#f5ede6] whitespace-pre-line leading-relaxed">
                      {item.recomendaciones}
                    </p>
                  ) : (
                    <p className="text-[#f5ede6] whitespace-pre-line leading-relaxed">
                      {item.preparacion}
                    </p>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Flecha derecha */}
        <button
          onClick={nextSlide}
          className="
            shrink-0
            w-10
            h-10
            md:w-12
            md:h-12
            rounded-full
            border
            border-[#c9956a]/30
            text-[#c9956a]
            hover:bg-[#c9956a]
            hover:text-[#0c0604]
            transition
          "
        >
          →
        </button>

      </div>

      {/* Recomendación General */}
      <div className="mt-12 max-w-4xl mx-auto">

        <div
          className="
            bg-[#120905]
            border border-[#c9956a]/20
            rounded-2xl
            p-6
            text-center
          "
        >
          <h3 className="text-xl md:text-2xl font-serif text-[#c9956a] mb-3">
            Recomendación General
          </h3>

          <p className="text-[#f5ede6] leading-relaxed">
            {recomendacionGeneral}
          </p>
        </div>

      </div>

    </section>
  );
};

export default Seccion3;