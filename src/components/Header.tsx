import Link from "next/link";

export function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="hover:text-blue-200" legacyBehavior>
            <h1 className="text-2xl font-bold">Mi Tienda</h1>
          </Link>
          <div className="space-x-4">
            <Link href="/productos" className="hover:text-blue-200">Catálogo</Link>
            <Link href="/contacto" className="hover:text-blue-200">Contacto</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
