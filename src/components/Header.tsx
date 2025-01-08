export function Header() {
  return (
    <header className="bg-[#000034] border-b border-gray-200 py-3">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary text-white">
              Neumáticos cabra
            </h1>
          </div>

          <nav className="hidden sm:flex space-x-8">
            {/* <a href="/" className="text-text hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#productos" className="text-text hover:text-primary transition-colors">
              Productos
            </a> */}
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=541161370256&text=Hola!%20Queria%20consultar%20acerca%20de..."
            >
              <button className="px-4 py-2 border-white rounded-md text-white transition-all hover:bg-white hover:text-black">
                Contacto
              </button>
            </a>
          </nav>

          <div className="sm:hidden">
            <button className="text-text p-2 text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
