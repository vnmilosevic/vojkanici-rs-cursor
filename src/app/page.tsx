import Nav from '@/components/Nav';
import OurStory from '@/components/OurStory';
import Products from '@/components/Products';
import HowWeWork from '@/components/HowWeWork';
import Footer from '@/components/Footer';
import Copyright from '@/components/Copyright';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <OurStory />
      <Products />
      <HowWeWork />
      <Footer />
      <Copyright />
    </main>
  );
}
