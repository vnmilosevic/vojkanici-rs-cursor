import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { LanguageProvider } from '@/context/LanguageContext';
import { ModalProvider } from '@/context/ModalContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </LanguageProvider>
  );
} 