import Head from 'next/head';
import Nav from '@/components/Nav';
import OurStory from '@/components/OurStory';
import Products from '@/components/Products';
import HowWeWork from '@/components/HowWeWork';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t.footer.title}</title>
        <meta name="description" content={t.footer.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Vojkanići, farma, poljoprivreda, organska hrana, mleko, sir, jaja" />
        <meta property="og:title" content={t.footer.title} />
        <meta property="og:description" content={t.footer.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.footer.title} />
        <meta name="twitter:description" content={t.footer.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://vojkanici.rs" />
      </Head>
      <main>
        <Nav />
        <OurStory />
        <Products />
        <HowWeWork />
        <Footer />
      </main>
    </>
  );
} 