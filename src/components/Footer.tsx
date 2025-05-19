import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useModal } from '@/context/ModalContext';

export default function Footer() {
  const { t } = useLanguage();
  const { openOrderModal } = useModal();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.contact}</h3>
            <p className="mb-2">{t.footer.address}</p>
            <p className="mb-2">{t.footer.phone}</p>
            <p className="mb-2">{t.footer.email}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#products" className="hover:text-gray-300 transition-colors">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-gray-300 transition-colors">
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <button
                  onClick={openOrderModal}
                  className="hover:text-gray-300 transition-colors"
                >
                  {t.nav.order}
                </button>
              </li>
              <li>
                <Link href="#contact" className="hover:text-gray-300 transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.social}</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} {t.nav.logo}. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
} 