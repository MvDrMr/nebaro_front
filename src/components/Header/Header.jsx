import { useState } from "react";
import { Menu, X } from "lucide-react";

import ModalHistoria from "../Modal/ModalHistoria";
import Comprar from "../Modal/ModalComprar";
import Logo from "../../assets/Logo.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRecomOpen, setIsRecomOpen] = useState(false);
  const [isSobreOpen, setIsSobreOpen] = useState(false);

  return (
    <>
      <nav className="relative z-50 border-b border-white/5 bg-[#0c0604]/90 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-4 md:py-6">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <img src={Logo} alt="Nebaro Logo" className="h-10 w-auto" />
            <span className="text-2xl font-serif tracking-wider text-white">
              NEBA<span className="text-[#c9956a]">RO</span>
            </span>
          </div>
          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-[#d4b89a]">
            {/* <a href="#" className="hover:text-white transition">
              Inicio
            </a> */}

            {/* <a href="#" className="hover:text-white transition">
              Menú
            </a> */}

            <button
              onClick={() => setIsRecomOpen(true)}
              className="text-[#c9956a] border border-[#3a2518] px-4 py-2 rounded-full hover:bg-[#3a2518]/50 transition"
            >
              Historia
            </button>

            <button
              onClick={() => setIsSobreOpen(true)}
              className="bg-[#9D7153] text-[#0c0604] px-4 py-2 rounded-full hover:bg-[#b08364] transition font-medium"
            >
              Comprar
            </button>
          </div>

          {/* Botón hamburguesa móvil */}
          <button
            className="md:hidden text-[#c9956a]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-6 flex flex-col gap-4 text-center bg-[#0c0604] border-t border-white/5">
            <a
              href="#"
              className="text-[#d4b89a] hover:text-white transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>

            <a
              href="#"
              className="text-[#d4b89a] hover:text-white transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Menú
            </a>

            <button
              onClick={() => {
                setIsRecomOpen(true);
                setIsMenuOpen(false);
              }}
              className="text-[#c9956a] border border-[#3a2518] py-3 rounded-full"
            >
              Historia
            </button>

            <button
              onClick={() => {
                setIsSobreOpen(true);
                setIsMenuOpen(false);
              }}
              className="bg-[#9D7153] text-[#0c0604] py-3 rounded-full font-medium"
            >
              Comprar
            </button>
          </div>
        )}
      </nav>

      <ModalHistoria
        isOpen={isRecomOpen}
        onClose={() => setIsRecomOpen(false)}
      />

      <Comprar
        isOpen={isSobreOpen}
        onClose={() => setIsSobreOpen(false)}
      />
    </>
  );
};

export default Header;