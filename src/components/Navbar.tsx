import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const t = translations[language].nav;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'sr' ? 'en' : 'sr');
  };

  const toggleTheme = () => {
    setTheme(theme === 'winter' ? 'summer' : 'winter');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900">
            {t.logo}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t.products}
            </Link>
            <Link href="/gallery" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t.gallery}
            </Link>
            <Link href="/order" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t.order}
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t.contact}
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t.blog}
            </Link>
          </div>

          {/* Language and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={toggleTheme}
              className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t.theme[theme as keyof typeof t.theme]}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label={t.openMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/products"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {t.products}
              </Link>
              <Link
                href="/gallery"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {t.gallery}
              </Link>
              <Link
                href="/order"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {t.order}
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {t.contact}
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {t.blog}
              </Link>
              <div className="flex items-center space-x-4 px-3 py-2">
                <button
                  onClick={toggleLanguage}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {language.toUpperCase()}
                </button>
                <button
                  onClick={toggleTheme}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t.theme[theme as keyof typeof t.theme]}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 