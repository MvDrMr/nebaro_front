import logo from "../../assets/Logo.webp";
import espressoImg from "../../assets/CarruselPreparacion/Expresso.webp";

const ModalHistoria = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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

        {/* Logo */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <img
            src={logo}
            alt="NEBARO Logo"
            className="
              h-14
              sm:h-20
              w-auto
              opacity-90
            "
          />
        </div>

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
          Nuestra ModalHistoria
        </h2>

        {/* Contenido */}
        <div className="text-center space-y-4">

          <p
            className="
              text-sm
              sm:text-base
              leading-relaxed
              text-[#f5ede6]
            "
          >
            En <strong>NEBARO</strong>, nuestra pasión nace del respeto por la
            tierra y el grano. Lo que comenzó como un pequeño sueño de
            transformar el café en un ritual, hoy se ha convertido en una
            experiencia compartida.
          </p>

          <p
            className="
              text-sm
              sm:text-base
              leading-relaxed
              text-[#988476]
            "
          >
            Cada taza cuenta una ModalHistoria de dedicación, desde los cafetales
            hasta tus manos, buscando siempre la perfección en cada proceso.
          </p>

          {/* Imagen */}
          <div className="pt-2">
            <img
              src={espressoImg}
              alt="Café Espresso"
              className="
                w-full
                h-40
                sm:h-48
                md:h-56
                object-cover
                rounded-2xl
                border border-[#c9956a]/20
                shadow-xl
                opacity-90
              "
            />
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

export default ModalHistoria;