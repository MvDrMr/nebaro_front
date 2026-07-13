import bolsa200 from "../../assets/bolsa-200g.webp";
import promocion from "../../assets/Promocion.webp";
import { useState } from "react";

const ModalProductos = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  //Const para el carrusel de imágenes.
  const productos = [
    {
      imagen: bolsa200,
      titulo: "Bolsa 200g",
      descripcion: [
        "Café de especialidad",
        "100% arábica de Huehuetenango.",
        "Precio Q.35.00"
      ]
    },
    {
      imagen: promocion,
      titulo: "PROMO ESPECIAL",
      descripcion: [
        "2 bolsas de 200g",
        "Café de especialidad 100% arábica de Huehuetenango.",
        "Precio Q.60.00"
      ],
      oferta: "Por tiempo límitado. ¡Aprovecha esta oferta y disfruta del mejor café!"
    }
  ];

  //Carrusel.
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === productos.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? productos.length - 1 : prev - 1
    );
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm">

      {/* Modal */}
      <div className="
            relative
            bg-[#120905]
            border border-[#c9956a]/30
            rounded-3xl
            w-full
            max-w-lg
            max-h-[90vh]
            overflow-y-auto
            shadow-2xl
            p-5
            sm:p-8
          ">

        {/* Cerrar */}
        <button
          onClick={onClose}
          className="
                absolute
                top-4
                right-4
                text-[#988476]
                hover:text-[#c9956a]
                transition
                text-xl
              "
        >
          ✕
        </button>

        {/* Título */}
        <h2
          className="
                text-2xl
                sm:text-3xl
                font-serif
                font-bold
                text-[#c9956a]
                text-center
                mb-4
              "
        >
          Nuestros productos
        </h2>

        {/* Contenido */}
        <div className="text-center space-y-4">
          <div className="space-y-6">
            {/* Imagen */}
            <div className="h-72 flex items-center justify-center overflow-hidden rounded-2xl border border-[#c9956a]/20">
              <img
                src={productos[currentIndex].imagen}
                alt={productos[currentIndex].titulo}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Información */}
            <div>
              {/* Título */}
              <h3 className="text-2xl font-bold text-[#c9956a] mb-4">
                {productos[currentIndex].titulo}
              </h3>

              {/* Descripción */}
              <div className="space-y-2 text-[#f5ede6]">
                {
                  productos[currentIndex].descripcion.map((texto, index) => (
                    <p
                      key={index}
                      className={
                        texto.includes("Precio")
                          ? "text-[#c9956a] text-xl font-bold"
                          : ""
                      }
                    >
                      {texto}
                    </p>
                  ))
                }
              </div>

              <div className="text-[#bcb851] text-sm mt-2">
                {productos[currentIndex].oferta}
              </div>
            </div>

            {/* Controles */}
            <div className="flex justify-center gap-4">
              <button
                onClick={prevSlide}
                className="px-4 py-2 rounded-full border border-[#c9956a] text-[#c9956a] hover:bg-[#c9956a] hover:text-[#120905] transition"
              >
                ←
              </button>

              <button
                onClick={nextSlide}
                className="px-4 py-2 rounded-full border border-[#c9956a] text-[#c9956a] hover:bg-[#c9956a] hover:text-[#120905] transition"
              >
                →
              </button>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center gap-2">

              {productos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`
          w-3
          h-3
          rounded-full
          transition
          ${currentIndex === index
                      ? "bg-[#c9956a]"
                      : "bg-[#c9956a]/30"
                    }
        `}
                />
              ))}

            </div>
          </div>
        </div>

        {/* Botón */}
        <button
          onClick={onClose}
          className="
                mt-6
                sm:mt-8
                w-full
                bg-[#c9956a]
                hover:bg-[#a87a56]
                text-[#0c0604]
                font-semibold
                py-3
                rounded-xl
                transition
              "
        >
          Cerrar
        </button>

      </div>
    </div>
  );
};

export default ModalProductos;