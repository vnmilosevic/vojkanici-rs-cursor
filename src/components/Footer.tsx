import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">{t.title}</h3>
            <p className="mb-6">{t.description}</p>
            <div className="space-y-2">
              <p>{t.address}</p>
              <p>{t.phone}</p>
              <p>{t.email}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">{t.quickLinks}</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/products" className="hover:text-foreground transition-colors">
                  {translations[language].nav.products}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-foreground transition-colors">
                  {translations[language].nav.gallery}
                </Link>
              </li>
              <li>
                <Link href="/order" className="hover:text-foreground transition-colors">
                  {translations[language].nav.order}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  {translations[language].nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">{t.blog.title}</h4>
            <p className="mb-6">{t.blog.description}</p>
            <Button asChild>
              <Link href="/blog">
                {t.blog.cta}
              </Link>
            </Button>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">{t.social}</h4>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p>
            {translations[language].copyright.text}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 