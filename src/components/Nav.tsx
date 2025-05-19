import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';
import ContactModal from './ContactModal';
import OrderModal from './OrderModal';

export default function Nav() {
  const { t, language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSummer, setIsSummer] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

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

  const handleThemeChange = () => {
    setIsSummer(!isSummer);
    // Ovde možemo dodati logiku za promenu tema ako je potrebno
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Војканићи
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link href="#products" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t.nav.products}
                </Link>
                <Link href="#gallery" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t.nav.gallery}
                </Link>
                <button
                  onClick={() => setIsOrderModalOpen(true)}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t.nav.order}
                </button>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t.nav.contact}
                </button>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t.nav.blog}
                </Link>
                {mounted && (
                  <>
                    <button
                      onClick={handleLanguageChange}
                      className="px-2 py-1 rounded bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                      {language === 'sr' ? 'EN' : 'СР'}
                    </button>
                    <button
                      onClick={handleThemeChange}
                      className="px-2 py-1 rounded bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                      {isSummer ? '❄️' : '☀️'}
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="#products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                {t.nav.products}
              </Link>
              <Link href="#gallery" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                {t.nav.gallery}
              </Link>
              <button
                onClick={() => {
                  setIsOrderModalOpen(true);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {t.nav.order}
              </button>
              <button
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {t.nav.contact}
              </button>
              <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                {t.nav.blog}
              </Link>
              {mounted && (
                <>
                  <button
                    onClick={handleLanguageChange}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {language === 'sr' ? 'EN' : 'СР'}
                  </button>
                  <button
                    onClick={handleThemeChange}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {isSummer ? '❄️ Зима' : '☀️ Лето'}
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </>
  );
} 