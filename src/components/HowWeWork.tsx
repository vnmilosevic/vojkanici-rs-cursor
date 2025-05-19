import Link from 'next/link';
import Image from 'next/image';

const HowWeWork = () => {
  // Koristimo istu sliku više puta za grid
  const galleryImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80";
  
  // Kreirajmo niz od 12 slika za grid (3 reda po 4 slike)
  const galleryImages = Array(12).fill(galleryImage);

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Leva strana - Tekst */}
          <div className="text-left">
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-full mb-4">
              Naš pristup
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Kako radimo
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Naše porodično gazdinstvo se bavi proizvodnjom kvalitetnih poljoprivrednih proizvoda već više od 30 godina. 
              Kombinujemo tradicionalne metode uzgajanja sa modernim tehnologijama kako bismo vam obezbedili najbolje proizvode.
              Svaki proizvod je rezultat naše posvećenosti kvalitetu i održivosti.
            </p>
            
            <Link 
              href="#contact-modal" 
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              Izaberi proizvode
            </Link>
          </div>

          {/* Desna strana - Grid galerija */}
          <div className="grid grid-cols-4 gap-2">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork; 