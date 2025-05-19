import Link from 'next/link';
import Image from 'next/image';

interface ProductProps {
  image: string;
  tagline: string;
  title: string;
  description: string;
  price: string;
}

const Product = ({ image, tagline, title, description, price }: ProductProps) => {
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
        />
      </div>
      
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full mb-3">
          {tagline}
        </span>
        
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
            Naruči →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Product; 