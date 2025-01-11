import { useState } from 'react';

interface FilterProps {
  categories: string[];
  brands: string[];
  vehicles: string[];
  selectedCategory: string;
  selectedBrand: string;
  selectedVehicle: string;
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
  onVehicleChange: (vehicle: string) => void;
}

export function CategoryFilter({
  categories,
  brands,
  vehicles,
  selectedCategory,
  selectedBrand,
  selectedVehicle,
  onCategoryChange,
  onBrandChange,
  onVehicleChange,
}: FilterProps) {
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);

  return (
    <div className="mb-8 text-black">
      <button
        onClick={() => setIsFiltersVisible(!isFiltersVisible)}
        className="mb-4 flex items-center gap-2 text-sm text-gray-600 hover:text-[#0f205a] transition-colors"
      >
        {isFiltersVisible ? (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Ocultar filtros
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Mostrar filtros
          </>
        )}
      </button>

      <div className={`transition-all duration-300 ease-in-out ${
        isFiltersVisible 
          ? 'opacity-100 max-h-96' 
          : 'opacity-0 max-h-0 overflow-hidden'
      }`}>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 p-4 border border-gray-100 rounded-lg bg-gray-50">
          {/* Filtro de Categorías */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-500 mb-2">
              Categoría
            </label>
            <select 
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#0f205a]"
            >
              <option value="all">Todas las categorías</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Filtro de Marcas */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-500 mb-2">
              Marca
            </label>
            <select 
              value={selectedBrand}
              onChange={(e) => onBrandChange(e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#0f205a]"
            >
              <option value="all">Todas las marcas</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Filtro de Vehículos */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-500 mb-2">
              Tipo de Vehículo
            </label>
            <select 
              value={selectedVehicle}
              onChange={(e) => onVehicleChange(e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#0f205a]"
            >
              <option value="all">Todos los vehículos</option>
              {vehicles.map((vehicle) => (
                <option key={vehicle} value={vehicle}>
                  {vehicle}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
} 