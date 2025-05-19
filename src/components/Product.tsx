import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

interface ProductProps {
  image: string;
  tagline: string;
  title: string;
  description: string;
  price: string;
}

export default function Product({
  image,
  tagline,
  title,
  description,
  price,
}: ProductProps) {
  const { t } = useLanguage();

  return (
    <Link 
      href="#contact-modal" 
      className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      
      <div className="p-6">
        <div className="inline-block bg-gray-100 px-3 py-1 rounded-full mb-4">
          <span className="text-gray-900 text-sm font-medium">{tagline}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-gray-900 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">
            {price}
          </span>
          
          <span className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
            {t.nav.order} →
          </span>
        </div>
      </div>
    </Link>
  );
} 