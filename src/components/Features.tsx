import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Truck, Headphones } from 'lucide-react';

const Features = () => {
  const { language } = useLanguage();
  const t = translations[language].features;

  const features = [
    {
      id: 'quality',
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      id: 'delivery',
      icon: <Truck className="w-8 h-8" />,
    },
    {
      id: 'support',
      icon: <Headphones className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="group relative hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-2xl font-semibold mb-4">
                  {t.items[feature.id as keyof typeof t.items].title}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {t.items[feature.id as keyof typeof t.items].description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 