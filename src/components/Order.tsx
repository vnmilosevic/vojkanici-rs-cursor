import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type StepKey = 'products' | 'quantities' | 'contact' | 'summary';
type ProductId = keyof typeof translations.sr.products.items;

const Order = () => {
  const { language } = useLanguage();
  const t = translations[language].order;
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    products: {} as Record<ProductId, number>,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProductChange = (productId: ProductId, quantity: number) => {
    setFormData((prev) => ({
      ...prev,
      products: {
        ...prev.products,
        [productId]: quantity,
      },
    }));
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const getStepKey = (stepNumber: number): StepKey => {
    switch (stepNumber) {
      case 1:
        return 'products';
      case 2:
        return 'quantities';
      case 3:
        return 'contact';
      case 4:
        return 'summary';
      default:
        return 'products';
    }
  };

  const calculateTotal = (products: Record<ProductId, number>): number => {
    return Object.entries(products).reduce((total, [id, quantity]) => {
      const productId = id as ProductId;
      const price = parseFloat(
        translations[language].products.items[productId].price.replace(/[^0-9.-]+/g, '')
      );
      return total + price * quantity;
    }, 0);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">{t.title}</h2>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between mb-12">
            {[1, 2, 3, 4].map((stepNumber) => {
              const stepClass = 'flex-1 text-center ' + (stepNumber < step 
                ? 'text-primary' 
                : stepNumber === step 
                ? 'text-foreground' 
                : 'text-muted-foreground');
              
              const circleClass = 'w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ' + (stepNumber < step
                ? 'bg-primary text-primary-foreground'
                : stepNumber === step
                ? 'bg-foreground text-background'
                : 'bg-muted text-muted-foreground');

              return (
                <div
                  key={stepNumber}
                  className={stepClass}
                >
                  <div
                    className={circleClass}
                  >
                    {stepNumber}
                  </div>
                  <span className="text-sm font-medium">{t.steps[getStepKey(stepNumber)]}</span>
                </div>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground mb-6">{t.steps.products}</h3>
                {Object.entries(translations[language].products.items).map(([id, product]) => {
                  const productId = id as ProductId;
                  return (
                    <Card key={productId}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-medium text-foreground">{product.title}</h4>
                            <p className="text-muted-foreground">{product.price}</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <Input
                              type="number"
                              min="0"
                              value={formData.products[productId] || 0}
                              onChange={(e) => handleProductChange(productId, parseInt(e.target.value) || 0)}
                              className="w-20"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground mb-6">{t.steps.quantities}</h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {Object.entries(formData.products).map(([id, quantity]) => {
                        if (quantity === 0) return null;
                        const productId = id as ProductId;
                        const product = translations[language].products.items[productId];
                        return (
                          <div key={productId} className="flex justify-between items-center">
                            <span className="text-foreground">{product.title}</span>
                            <span className="text-muted-foreground">
                              {quantity} x {product.price}
                            </span>
                          </div>
                        );
                      })}
                      <div className="border-t border-border pt-4 mt-4">
                        <div className="flex justify-between items-center font-semibold">
                          <span className="text-foreground">{t.total}</span>
                          <span className="text-foreground">
                            {calculateTotal(formData.products).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground mb-6">{t.steps.contact}</h3>
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.name}</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t.phone}</Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">{t.message}</Label>
                      <Input
                        type="text"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground mb-6">{t.steps.summary}</h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-medium text-foreground mb-4">{t.contactInfo}</h4>
                        <div className="space-y-2">
                          <p className="text-muted-foreground">{formData.name}</p>
                          <p className="text-muted-foreground">{formData.phone}</p>
                          {formData.message && (
                            <p className="text-muted-foreground">{formData.message}</p>
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-foreground mb-4">{t.orderSummary}</h4>
                        <div className="space-y-2">
                          {Object.entries(formData.products).map(([id, quantity]) => {
                            if (quantity === 0) return null;
                            const productId = id as ProductId;
                            const product = translations[language].products.items[productId];
                            return (
                              <div key={productId} className="flex justify-between items-center">
                                <span className="text-foreground">{product.title}</span>
                                <span className="text-muted-foreground">
                                  {quantity} x {product.price}
                                </span>
                              </div>
                            );
                          })}
                          <div className="border-t border-border pt-4 mt-4">
                            <div className="flex justify-between items-center font-semibold">
                              <span className="text-foreground">{t.total}</span>
                              <span className="text-foreground">
                                {calculateTotal(formData.products).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            <div className="flex justify-between pt-6">
              {step > 1 && (
                <Button type="button" variant="outline" onClick={prevStep}>
                  {t.prev}
                </Button>
              )}
              {step < 4 ? (
                <Button type="button" onClick={nextStep}>
                  {t.next}
                </Button>
              ) : (
                <Button type="submit">
                  {t.submit}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Order; 