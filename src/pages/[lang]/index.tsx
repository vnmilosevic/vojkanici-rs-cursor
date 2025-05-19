import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Language } from '@/translations';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguagePage() {
  const router = useRouter();
  const { lang } = router.query;
  const { setLanguage } = useLanguage();

  useEffect(() => {
    if (lang === 'en') {
      setLanguage('en');
      router.push('/');
    } else {
      // Za bilo koji drugi jezik ili rutu, preusmeri na root
      router.push('/');
    }
  }, [lang, setLanguage, router]);

  return null;
} 