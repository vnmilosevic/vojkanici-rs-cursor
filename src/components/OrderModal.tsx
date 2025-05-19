import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

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
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />

        <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
          <div className="absolute right-0 top-0 pr-4 pt-4">
            <button
              type="button"
              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 className="text-2xl font-semibold leading-6 text-gray-900 mb-6">
                {t.order.title}
              </h3>

              {/* Steps indicator */}
              <div className="mb-8">
                <div className="flex justify-between">
                  {Object.values(t.order.steps).map((step, index) => (
                    <div
                      key={index}
                      className={`flex-1 text-center ${
                        index + 1 === currentStep ? 'text-gray-900' : 'text-gray-400'
                      }`}
                    >
                      <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
                        index + 1 === currentStep ? 'bg-gray-900 text-white' : 'bg-gray-200'
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
                      <div
                        key={product.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                          selectedProducts.some(p => p.id === product.id)
                            ? 'border-gray-900 bg-gray-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleProductSelect(product)}
                      >
                        <div className="relative h-40 mb-4">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <h4 className="font-medium">{product.name}</h4>
                        <p className="text-gray-600">{product.price} дин</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Step 2: Quantities */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    {selectedProducts.map(product => (
                      <div key={product.id} className="flex items-center justify-between border-b pb-4">
                        <div>
                          <h4 className="font-medium">{product.name}</h4>
                          <p className="text-gray-600">{product.price} дин</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <input
                            type="number"
                            min="1"
                            value={product.quantity}
                            onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                            className="w-20 rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                          />
                          <span className="text-gray-600">
                            {product.price * product.quantity} дин
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="text-right text-lg font-medium">
                      {t.order.total}: {calculateTotal()} дин
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Information */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        {t.order.name}
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={contactInfo.name}
                        onChange={handleContactChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        {t.order.phone}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={contactInfo.phone}
                        onChange={handleContactChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        {t.order.message}
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={contactInfo.message}
                        onChange={handleContactChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Summary */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">{t.order.summary.products}</h4>
                      {selectedProducts.map(product => (
                        <div key={product.id} className="flex justify-between py-2 border-b">
                          <span>{product.name} x {product.quantity}</span>
                          <span>{product.price * product.quantity} дин</span>
                        </div>
                      ))}
                      <div className="flex justify-between font-medium mt-2">
                        <span>{t.order.summary.totalPrice}</span>
                        <span>{calculateTotal()} дин</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">{t.order.summary.contact}</h4>
                      <div className="space-y-2">
                        <p><span className="font-medium">{t.order.name}:</span> {contactInfo.name}</p>
                        <p><span className="font-medium">{t.order.phone}:</span> {contactInfo.phone}</p>
                        {contactInfo.message && (
                          <p><span className="font-medium">{t.order.message}:</span> {contactInfo.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="mt-8 flex justify-between">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={previousStep}
                      className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      {t.order.previous}
                    </button>
                  )}
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500"
                    >
                      {t.order.next}
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500"
                    >
                      {t.order.submit}
                    </button>
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