import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

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
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-foreground">
            {t.logo}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.products}
            </Link>
            <Link href="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.gallery}
            </Link>
            <Link href="/order" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.order}
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.contact}
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.blog}
            </Link>
          </div>

          {/* Language and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="text-muted-foreground hover:text-foreground"
            >
              {language.toUpperCase()}
            </Button>
            <Button
              variant="ghost"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground"
            >
              {t.theme[theme as keyof typeof t.theme]}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden"
            aria-label={t.openMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/products"
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                {t.products}
              </Link>
              <Link
                href="/gallery"
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                {t.gallery}
              </Link>
              <Link
                href="/order"
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                {t.order}
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                {t.contact}
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                {t.blog}
              </Link>
              <div className="flex items-center space-x-4 px-3 py-2">
                <Button
                  variant="ghost"
                  onClick={toggleLanguage}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {language.toUpperCase()}
                </Button>
                <Button
                  variant="ghost"
                  onClick={toggleTheme}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {t.theme[theme as keyof typeof t.theme]}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 