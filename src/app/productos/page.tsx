'use client';
import { useState, useEffect } from 'react';
import { getProducts } from "@/services/getProducts";
import { ProductCard } from "@/components/ProductCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function Products() {
    const [products, setProducts] = useState<any>([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedBrand, setSelectedBrand] = useState('all');
    const [selectedVehicle, setSelectedVehicle] = useState('all');
    const [categories, setCategories] = useState<string[]>([]);
    const [brands, setBrands] = useState<string[]>([]);
    const [vehicles, setVehicles] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getProducts();
                setProducts(fetchedProducts);

                const uniqueCategories = [...new Set(fetchedProducts.map(product => product.categoria))];
                const uniqueBrands = [...new Set(fetchedProducts.map(product => product.marca))];
                const uniqueVehicles = [...new Set(fetchedProducts.map(product => product.vehiculo))];

                setCategories(uniqueCategories);
                setBrands(uniqueBrands);
                setVehicles(uniqueVehicles);
            } catch (error) {
                console.error('Error al cargar productos:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = products.filter((product: any) => {
        const matchCategory = selectedCategory === 'all' || product.categoria === selectedCategory;
        const matchBrand = selectedBrand === 'all' || product.marca === selectedBrand;
        const matchVehicle = selectedVehicle === 'all' || product.vehiculo === selectedVehicle;

        return matchCategory && matchBrand && matchVehicle;
    });

    if (isLoading) {
        return <LoadingScreen />;
    }
    
    return (
        <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
            <main className="max-w-7xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-black">Catálogo</h1>

                <CategoryFilter
                    categories={categories}
                    brands={brands}
                    vehicles={vehicles}
                    selectedCategory={selectedCategory}
                    selectedBrand={selectedBrand}
                    selectedVehicle={selectedVehicle}
                    onCategoryChange={setSelectedCategory}
                    onBrandChange={setSelectedBrand}
                    onVehicleChange={setSelectedVehicle}
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