import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';

export default function Nav() {
  const { t, language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = () => {
    const newLang = language === 'sr' ? 'en' : 'sr';
    setLanguage(newLang);
    if (newLang === 'en') {
      window.location.href = '/en';
    } else {
      window.location.href = '/';
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Војканићи
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="#products" className="text-gray-600 hover:text-gray-900 transition-colors">
                {t.nav.products}
              </Link>
              <Link href="#gallery" className="text-gray-600 hover:text-gray-900 transition-colors">
                {t.nav.gallery}
              </Link>
              <Link href="#order" className="text-gray-600 hover:text-gray-900 transition-colors">
                {t.nav.order}
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                {t.nav.contact}
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                {t.nav.blog}
              </Link>
              {mounted && (
                <button
                  onClick={handleLanguageChange}
                  className="px-2 py-1 rounded bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  {language === 'sr' ? 'EN' : 'СР'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 