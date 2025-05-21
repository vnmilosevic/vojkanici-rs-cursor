import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import Link from 'next/link';

const Products = () => {
  const { language } = useLanguage();
  const t = translations[language].products;

  const products = [
    {
      id: 'milk',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAyMmM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwUzE3LjUyMyAyIDEyIDIgMiA2LjQ3NyAyIDEyczQuNDc3IDEwIDEwIDEwem0wLTJhOCA4IDAgMTEwLTE2IDggOCAwIDAxMCAxNnptMC0yYTQgNCAwIDEwMC04IDQgNCAwIDAwMCA4eiIgZmlsbD0iIzk5OSIvPjwvc3ZnPg=='
    },
    {
      id: 'cheese',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAyMmM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwUzE3LjUyMyAyIDEyIDIgMiA2LjQ3NyAyIDEyczQuNDc3IDEwIDEwIDEwem0wLTJhOCA4IDAgMTEwLTE2IDggOCAwIDAxMCAxNnptMC0yYTQgNCAwIDEwMC04IDQgNCAwIDAwMCA4eiIgZmlsbD0iIzk5OSIvPjwvc3ZnPg=='
    },
    {
      id: 'whey',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAyMmM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwUzE3LjUyMyAyIDEyIDIgMiA2LjQ3NyAyIDEyczQuNDc3IDEwIDEwIDEwem0wLTJhOCA4IDAgMTEwLTE2IDggOCAwIDAxMCAxNnptMC0yYTQgNCAwIDEwMC04IDQgNCAwIDAwMCA4eiIgZmlsbD0iIzk5OSIvPjwvc3ZnPg=='
    },
    {
      id: 'eggs',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAyMmM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwUzE3LjUyMyAyIDEyIDIgMiA2LjQ3NyAyIDEyczQuNDc3IDEwIDEwIDEwem0wLTJhOCA4IDAgMTEwLTE2IDggOCAwIDAxMCAxNnptMC0yYTQgNCAwIDEwMC04IDQgNCAwIDAwMCA4eiIgZmlsbD0iIzk5OSIvPjwvc3ZnPg=='
    },
    {
      id: 'chicken',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAyMmM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwUzE3LjUyMyAyIDEyIDIgMiA2LjQ3NyAyIDEyczQuNDc3IDEwIDEwIDEwem0wLTJhOCA4IDAgMTEwLTE2IDggOCAwIDAxMCAxNnptMC0yYTQgNCAwIDEwMC04IDQgNCAwIDAwMCA4eiIgZmlsbD0iIzk5OSIvPjwvc3ZnPg=='
    },
    {
      id: 'vegetables',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAyMmM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwUzE3LjUyMyAyIDEyIDIgMiA2LjQ3NyAyIDEyczQuNDc3IDEwIDEwIDEwem0wLTJhOCA4IDAgMTEwLTE2IDggOCAwIDAxMCAxNnptMC0yYTQgNCAwIDEwMC04IDQgNCAwIDAwMCA4eiIgZmlsbD0iIzk5OSIvPjwvc3ZnPg=='
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img
                  src={product.image}
                  alt={t.items[product.id as keyof typeof t.items].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
                  {t.items[product.id as keyof typeof t.items].tagline}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {t.items[product.id as keyof typeof t.items].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t.items[product.id as keyof typeof t.items].description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    {t.items[product.id as keyof typeof t.items].price}
                  </span>
                  <Link
                    href="/order"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    {translations[language].hero.orderButton}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 