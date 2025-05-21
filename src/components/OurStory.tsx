import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import Link from 'next/link';

const OurStory = () => {
  const { language } = useLanguage();
  const t = translations[language].ourStory;

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
              {t.tagline}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.title}</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {t.productsButton}
            </Link>
            <Link
              href="/order"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 bg-white rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl border border-gray-200"
            >
              {t.orderButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory; 