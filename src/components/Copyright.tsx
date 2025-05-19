import Link from 'next/link';

const Copyright = () => {
  return (
    <div className="w-full py-4 border-t">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>
            © 2025. PG Vojkanići. Sva prava zadržana.
          </div>
          <Link 
            href="https://www.poljoprivreda.gov.rs/registar-poljoprivrednih-gazdinstava" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            123456
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Copyright; 