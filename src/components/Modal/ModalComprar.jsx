const ModalComprar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // Fondo oscuro 
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity" id="modal-comprar">

      {/* Contenedor del Modal */}
      <div className="bg-[#120905] border border-[#c9956a]/30 p-8 rounded-2xl w-[90%] max-w-lg shadow-2xl relative">

        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#988476] hover:text-[#c9956a] transition"
        >
          ✕
        </button>

        <h2 className="text-3xl font-serif font-bold text-[#c9956a] mb-6">
          Sobre Nosotros
        </h2>

        <div className="text-[#f5ede6] space-y-4">
          <p className="leading-relaxed">
            En <strong>NEBARO</strong>, creemos que el café es más que una bebida, es un ritual.
            Seleccionamos los mejores granos para llevar una experiencia artesanal directo a tu taza.
          </p>
          <p className="text-[#988476]">
            <div className="space-y-2">
              <a
                href="https://wa.me/50248647145?text=Hola%20NEBARO,%20me%20gustaría%20obtener%20más%20información."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
              >
                WhatsApp: +502 4864-7145
              </a>
              
              <a
                href="https://wa.me/45569778?text=Hola%20NEBARO,%20me%20gustaría%20obtener%20más%20información."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
              >
                WhatsApp: +502 4556-9778
              </a>
            </div>
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full bg-[#c9956a] hover:bg-[#a87a56] text-[#0c0604] font-semibold py-3 rounded-lg transition duration-300"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalComprar;