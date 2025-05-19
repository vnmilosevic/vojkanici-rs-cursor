import Nav from '@/components/Nav';

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Блог
            </h1>
            <p className="text-xl text-gray-600">
              Ускоро
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 