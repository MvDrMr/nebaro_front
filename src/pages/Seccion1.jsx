import imgPrincipal from "../assets/PrensaFrancesa.jpeg";

const Seccion1 = () => {
  return (
    <section className="w-full bg-[#120905] text-[#f5ede6] py-24 px-12 flex flex-col md:flex-row items-center justify-center gap-16">
      
      {/* Lado Izquierdo / Imagen Principal */}
      <div className="flex-1 max-w-lg">
        <img 
          src={imgPrincipal} 
          alt="Café artesanal" 
          className="w-full h-auto rounded-lg shadow-2xl object-cover"
        />
      </div>

      {/* Lado Derecho */}
      <div className="flex-1 max-w-lg flex flex-col items-start text-left">
        <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-6">
          Enjoy a new blend<br />
          <span className="text-[#c9956a]">of coffee style</span>
        </h2>
        
        <p className="text-[#988476] text-lg mb-8 leading-relaxed">
          Explore all flavours of coffee with us. There is always a new cup worth experiencing.
        </p>
        <br></br>
        <button className="border border-[#c9956a] text-[#c9956a] px-8 py-3 rounded-full hover:bg-[#c9956a] hover:text-[#0c0604] transition">
          Learn More →
        </button>
      </div>

    </section>
  );
};

export default Seccion1;