import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <Link 
      href="/" 
      className={`font-bold ${sizeClasses[size]} text-foreground hover:text-primary transition-colors`}
    >
      VOJKANICI
    </Link>
  );
};

export default Logo; 