import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import Link from 'next/link';

const HowWeWork = () => {
  const { language } = useLanguage();
  const t = translations[language].howWeWork;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
            {t.tagline}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.title}</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.description}
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork; 