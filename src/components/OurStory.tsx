import Link from 'next/link';

const OurStory = () => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2532&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            Tradicija i kvalitet od 1990.
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Poljoprivredno gazdinstvo Vojkanići
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Naše porodično gazdinstvo se bavi proizvodnjom kvalitetnih poljoprivrednih proizvoda već više od 30 godina. 
            Kombinujemo tradicionalne metode uzgajanja sa modernim tehnologijama kako bismo vam obezbedili najbolje proizvode.
          </p>
          
          <Link 
            href="#products" 
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Naši proizvodi
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurStory; 