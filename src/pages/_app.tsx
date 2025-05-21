import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { ModalProvider } from '@/context/ModalContext';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ModalProvider>
          <main className={inter.className}>
            <Component {...pageProps} />
          </main>
        </ModalProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
} 