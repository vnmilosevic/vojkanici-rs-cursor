import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { X } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface ContactInfo {
  name: string;
  phone: string;
  message: string;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: '',
    phone: '',
    message: ''
  });

  const products = [
    { id: 'milk', name: t.products.items.milk.title, price: 120, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { id: 'cheese', name: t.products.items.cheese.title, price: 1500, image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { id: 'whey', name: t.products.items.whey.title, price: 80, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { id: 'eggs', name: t.products.items.eggs.title, price: 25, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { id: 'chicken', name: t.products.items.chicken.title, price: 450, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { id: 'vegetables', name: t.products.items.vegetables.title, price: 200, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
  ];

  const handleProductSelect = (product: Product) => {
    setSelectedProducts(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    setSelectedProducts(prev =>
      prev.map(p => p.id === productId ? { ...p, quantity } : p)
    );
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateTotal = () => {
    return selectedProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement order submission
    console.log('Order submitted:', { products: selectedProducts, contact: contactInfo, total: calculateTotal() });
    onClose();
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4 text-center">
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity" onClick={onClose} />

        <div className="relative transform overflow-hidden rounded-lg bg-background px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6 border border-border">
          <div className="absolute right-0 top-0 pr-4 pt-4">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 className="text-2xl font-semibold leading-6 text-foreground mb-6">
                {t.order.title}
              </h3>

              {/* Steps indicator */}
              <div className="mb-8">
                <div className="flex justify-between">
                  {Object.values(t.order.steps).map((step, index) => (
                    <div
                      key={index}
                      className={`flex-1 text-center ${
                        index + 1 === currentStep ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
                        index + 1 === currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="mt-2 text-sm">{step}</div>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Step 1: Product Selection */}
                {currentStep === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map(product => (
                      <Card
                        key={product.id}
                        className={`cursor-pointer transition-all ${
                          selectedProducts.some(p => p.id === product.id)
                            ? 'border-primary bg-primary/5'
                            : 'hover:border-primary/50'
                        }`}
                        onClick={() => handleProductSelect(product)}
                      >
                        <CardContent className="p-4">
                          <div className="relative h-40 mb-4">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <h4 className="font-medium text-foreground">{product.name}</h4>
                          <p className="text-muted-foreground">{product.price} дин</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {/* Step 2: Quantities */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    {selectedProducts.map(product => (
                      <div key={product.id} className="flex items-center justify-between border-b border-border pb-4">
                        <div>
                          <h4 className="font-medium text-foreground">{product.name}</h4>
                          <p className="text-muted-foreground">{product.price} дин</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Input
                            type="number"
                            min="1"
                            value={product.quantity}
                            onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                            className="w-20"
                          />
                          <span className="text-muted-foreground">
                            {product.price * product.quantity} дин
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="text-right text-lg font-medium text-foreground">
                      {t.order.total}: {calculateTotal()} дин
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Information */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.order.name}</Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={contactInfo.name}
                        onChange={handleContactChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t.order.phone}</Label>
                      <Input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={contactInfo.phone}
                        onChange={handleContactChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t.order.message}</Label>
                      <Textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={contactInfo.message}
                        onChange={handleContactChange}
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Summary */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2 text-foreground">{t.order.summary.products}</h4>
                      {selectedProducts.map(product => (
                        <div key={product.id} className="flex justify-between py-2 border-b border-border">
                          <span className="text-foreground">{product.name} x {product.quantity}</span>
                          <span className="text-muted-foreground">{product.price * product.quantity} дин</span>
                        </div>
                      ))}
                      <div className="flex justify-between py-2 font-medium">
                        <span className="text-foreground">{t.order.total}</span>
                        <span className="text-foreground">{calculateTotal()} дин</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 text-foreground">{t.order.summary.contact}</h4>
                      <div className="space-y-2">
                        <p className="text-muted-foreground">{contactInfo.name}</p>
                        <p className="text-muted-foreground">{contactInfo.phone}</p>
                        {contactInfo.message && (
                          <p className="text-muted-foreground">{contactInfo.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={previousStep}
                    >
                      {t.order.previous}
                    </Button>
                  )}
                  {currentStep < 4 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto"
                    >
                      {t.order.next}
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="ml-auto"
                    >
                      {t.order.submit}
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 