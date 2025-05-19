import Link from 'next/link';

interface BannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  buttonVariant?: 'primary' | 'secondary';
}

export default function Banner({
  title,
  description,
  buttonText,
  buttonHref,
  buttonVariant = 'primary',
}: BannerProps) {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-300">{description}</p>
          </div>
          <div>
            <Link
              href={buttonHref}
              className={`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${
                buttonVariant === 'primary'
                  ? 'text-gray-900 bg-white hover:bg-gray-50'
                  : 'text-white bg-gray-800 hover:bg-gray-700'
              } transition-colors`}
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 