import Link from 'next/link';

interface BannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  buttonVariant?: 'primary' | 'secondary';
}

const Banner = ({ 
  title, 
  description, 
  buttonText, 
  buttonHref,
  buttonVariant = 'primary'
}: BannerProps) => {
  const buttonClasses = {
    primary: 'bg-white text-gray-900 hover:bg-gray-100',
    secondary: 'bg-transparent border-2 border-white text-white hover:bg-white/10'
  };

  return (
    <div className="w-full bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-gray-300">{description}</p>
            </div>
            <Link 
              href={buttonHref} 
              className={`inline-block px-8 py-3 rounded-md font-medium transition-colors ${buttonClasses[buttonVariant]}`}
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner; 