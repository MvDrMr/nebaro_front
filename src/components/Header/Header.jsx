const Header = () => {
  return (
    <header className="bg-amber-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Cafetería ☕
        </h1>

        <nav className="flex gap-4">
          <a href="#">Inicio</a>
          <a href="#">Menú</a>
          <a href="#">Recomendaciones</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;