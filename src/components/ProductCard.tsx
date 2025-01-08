import Image from "next/image";

interface ProductCardProps {
  nombre: string;
  precio: number | string;
  foto: string;
  descripcion: string;
  categoria: string;
}

export function ProductCard({ nombre, precio, foto, descripcion, categoria }: ProductCardProps) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all">
      <div className="relative h-48 sm:h-56">
        <Image
          src={foto}
          alt={nombre}
          className="w-full h-full object-cover"
          width={200}
          height={200}
        />
        <span className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-md text-xs">
          {categoria}
        </span>
      </div>
      
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2 text-text">{nombre}</h2>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{descripcion}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-black">${precio}</span>
          <button className="bg-[#0f205a] text-white px-4 py-2 rounded-md hover:bg-[#162a75] transition-colors">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
} 