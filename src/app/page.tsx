'use client';
import { useState, useEffect } from 'react';
import { getProducts } from "@/services/getProducts";
import { ProductCard } from "@/components/ProductCard";
import { CategoryFilter } from "@/components/CategoryFilter";

export default function Home() {
  const [products, setProducts] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
      
      // Extraer categorías únicas
      const uniqueCategories = [...new Set(fetchedProducts.map(product => product.categoria))];
      setCategories(uniqueCategories);
    };

    fetchProducts();
  }, []);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((product: any) => product.categoria === selectedCategory);

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <main className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-black">Catálogo de Neumáticos</h1>
        
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product: any) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
