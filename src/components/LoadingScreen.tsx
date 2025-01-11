export function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0f205a]"></div>
      <p className="mt-4 text-gray-600">Cargando productos...</p>
    </div>
  );
} 