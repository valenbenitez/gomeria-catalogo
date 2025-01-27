'use client';
import { useState, useEffect } from 'react';
import { getProducts } from "@/services/getProducts";
import { ProductCard } from "@/components/ProductCard";
import { LoadingScreen } from "@/components/LoadingScreen";
import Link from 'next/link';
import { SliderComponent } from '@/components/Slider';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        // Seleccionar solo 3 productos destacados
        setFeaturedProducts(fetchedProducts.slice(0, 3));
      } catch (error) {
        console.error('Error al cargar productos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <section style={{ height: '100svh' }} className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-start">
            Elige los neumáticos correctos y siente la diferencia.
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-start">
            Descubre nuestra selección de productos de alta calidad
          </p>
            <SliderComponent />
          <Link 
            href="/productos" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver catálogo completo
          </Link>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product: any) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
