import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"
          alt="Farm landscape"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <span className="text-white text-sm font-medium">{t.hero.tagline}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          {t.hero.title}
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
          {t.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#products"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
          >
            {t.hero.productsButton}
          </Link>
          <Link
            href="#order"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 transition-colors"
          >
            {t.hero.orderButton}
          </Link>
        </div>
      </div>
    </section>
  );
} 