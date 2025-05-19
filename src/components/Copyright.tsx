import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const Copyright = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full py-4 border-t">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>
            {t.copyright.text}
          </div>
          <Link 
            href="https://www.poljoprivreda.gov.rs/registar-poljoprivrednih-gazdinstava" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            {t.copyright.regNumber}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Copyright; 