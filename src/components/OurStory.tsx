import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const OurStory = () => {
  const { language } = useLanguage();
  const t = translations[language].ourStory;

  return (
    <section className="py-24 bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-0">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  {t.tagline}
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-6">{t.title}</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="text-lg">
                  <Link href="/products">
                    {t.productsButton}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg">
                  <Link href="/order">
                    {t.orderButton}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OurStory; 