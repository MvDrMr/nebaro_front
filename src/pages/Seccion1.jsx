import imgPrincipal from "../assets/Promocion.webp";

const Seccion1 = ({
  setIsProductoOpen,
  isProductoOpen }) => {
  return (
    <section
      className="
        w-full
        bg-[#120905]
        text-[#f5ede6]
        py-12 sm:py-16 lg:py-24
        px-5 sm:px-8 lg:px-12
        flex flex-col lg:flex-row
        items-center
        justify-center
        gap-10 lg:gap-16
      "
    >
      {/* Imagen */}
      <div className="flex-1 w-full max-w-lg">
        <img
          src={imgPrincipal}
          alt="Café artesanal"
          className="
            w-full
            h-auto
            rounded-xl
            shadow-2xl
            object-cover
          "
        />
      </div>

      {/* Texto */}
      <div
        className="
          flex-1
          w-full
          max-w-lg
          flex
          flex-col
          items-center
          lg:items-start
          text-center
          lg:text-left
        "
      >
        <h2
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-serif
            font-bold
            leading-tight
            mb-6
          "
        >
          Promoción Especial
          <br />
          <span className="text-[#c9956a]">
            2 bolsas de 200g
          </span>
        </h2>

        <p
          className="
            text-[#988476]
            text-base
            sm:text-lg
            mb-8
            leading-relaxed
          "
        >
          Café de especialidad 100% arábica, de Huhuetenango.
        </p>

        <p className="font-bold">
          Precio Q60.00
        </p>

        <p className="text-[#988476] text-sm mt-2">
          Por tiempo límitado. ¡Aprovecha esta oferta y disfruta del mejor café!
        </p>

        <button
          onClick={() => setIsProductoOpen(true)}
          className="mt-2 border border-[#c9956a] text-[#c9956a] px-8 py-3 rounded-full
         hover:bg-[#c9956a] hover:text-[#0c0604] transition">
          Más productos →
        </button>
      </div>
    </section>
  );
};

export default Seccion1;