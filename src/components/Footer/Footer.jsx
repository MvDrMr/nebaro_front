import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#120905] border-t border-[#c9956a]/20 text-[#f5ede6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12">

        {/* Contenido */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 text-center sm:text-left">

          {/* Información */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-[#c9956a] mb-4">
              NEBARO
            </h3>

            <p className="text-[#988476] leading-7 text-sm sm:text-base">
              Más que una taza de café, una experiencia artesanal que
              despierta los sentidos y acompaña cada momento.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-xl font-semibold text-[#c9956a] mb-5">
              Navegación
            </h4>

            <ul className="space-y-3 text-[#988476]">
              <li>
                <a
                  href="#"
                  className="hover:text-[#c9956a] transition duration-300"
                >
                  Inicio
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-xl font-semibold text-[#c9956a] mb-5">
              Contáctanos
            </h4>

            <div className="space-y-4 text-[#988476]">

              <a
                href="https://wa.me/50248647145"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start gap-3 hover:text-[#c9956a] transition break-all"
              >
                <FaPhoneAlt className="shrink-0" />
                +502 4864-7145
              </a>

              <a
                href="https://wa.me/50245569778"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start gap-3 hover:text-[#c9956a] transition break-all"
              >
                <FaPhoneAlt className="shrink-0" />
                +502 4556-9778
              </a>

              <div className="flex items-center justify-center sm:justify-start gap-3">
                <FaMapMarkerAlt className="shrink-0" />
                Guatemala
              </div>

            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="text-xl font-semibold text-[#c9956a] mb-5">
              Síguenos
            </h4>

            <p className="text-[#988476] mb-6 text-sm sm:text-base">
              Mantente al tanto de nuestras promociones y novedades.
            </p>

            <div className="flex justify-center sm:justify-start gap-4">

              <a
                href="https://www.facebook.com/share/1NDsg6JULk/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full border border-[#c9956a]/40 flex items-center justify-center hover:bg-[#c9956a] hover:text-[#120905] hover:scale-110 transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/nebarocafe_?igsh=OW41NXdjMGM1eXZ5&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-[#c9956a]/40 flex items-center justify-center hover:bg-[#c9956a] hover:text-[#120905] hover:scale-110 transition-all duration-300"
              >
                <FaInstagram />
              </a>

            </div>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="border-t border-[#c9956a]/20 mt-12 pt-6">

          <p className="text-center text-[#988476] text-xs sm:text-sm leading-6">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#c9956a] font-semibold">NEBARO</span> —
            Casi todos los derechos reservados ☕
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;