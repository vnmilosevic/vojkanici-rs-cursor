import Link from 'next/link';
import Logo from './Logo';

const Nav = () => {
  return (
    <nav className="w-full py-4 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="flex items-center gap-8">
            <Link href="/en" className="text-gray-600 hover:text-gray-900">
              EN
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <Link 
              href="#" 
              className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Prijavi se
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav; 