import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HowWeWork = () => {
  const { language } = useLanguage();
  const t = translations[language].howWeWork;

  return (
    <section className="py-24 bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-0 text-center">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                {t.tagline}
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6">{t.title}</h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                {t.description}
              </p>
              <Button asChild size="lg" className="text-lg">
                <Link href="/about">
                  {t.cta}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork; 