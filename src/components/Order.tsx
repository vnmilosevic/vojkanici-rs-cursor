import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.title}</h2>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between mb-12">
            {[1, 2, 3, 4].map((stepNumber) => {
              const stepClass = 'flex-1 text-center ' + (stepNumber < step 
                ? 'text-blue-600' 
                : stepNumber === step 
                ? 'text-gray-900' 
                : 'text-gray-400');
              
              const circleClass = 'w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ' + (stepNumber < step
                ? 'bg-blue-600 text-white'
                : stepNumber === step
                ? 'bg-gray-900 text-white'
                : 'bg-gray-200 text-gray-400');

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
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t.steps.products}</h3>
                {Object.entries(translations[language].products.items).map(([id, product]) => {
                  const productId = id as ProductId;
                  return (
                    <div key={productId} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">{product.title}</h4>
                        <p className="text-gray-600">{product.price}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <input
                          type="number"
                          min="0"
                          value={formData.products[productId] || 0}
                          onChange={(e) => handleProductChange(productId, parseInt(e.target.value) || 0)}
                          className="w-20 px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t.steps.quantities}</h3>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="space-y-4">
                    {Object.entries(formData.products).map(([id, quantity]) => {
                      if (quantity === 0) return null;
                      const productId = id as ProductId;
                      const product = translations[language].products.items[productId];
                      return (
                        <div key={productId} className="flex justify-between items-center">
                          <span className="text-gray-900">{product.title}</span>
                          <span className="text-gray-600">
                            {quantity} x {product.price}
                          </span>
                        </div>
                      );
                    })}
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between items-center font-semibold">
                        <span className="text-gray-900">{t.total}</span>
                        <span className="text-gray-900">
                          {calculateTotal(formData.products).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t.steps.contact}</h3>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t.steps.summary}</h3>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-4">{t.summary.products}</h4>
                      {Object.entries(formData.products).map(([id, quantity]) => {
                        if (quantity === 0) return null;
                        const productId = id as ProductId;
                        const product = translations[language].products.items[productId];
                        return (
                          <div key={productId} className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">{product.title}</span>
                            <span className="text-gray-900">
                              {quantity} x {product.price}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-4">{t.summary.contact}</h4>
                      <div className="space-y-2">
                        <p className="text-gray-600">
                          <span className="font-medium">{t.name}:</span> {formData.name}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">{t.phone}:</span> {formData.phone}
                        </p>
                        {formData.message && (
                          <p className="text-gray-600">
                            <span className="font-medium">{t.message}:</span> {formData.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center font-semibold">
                        <span className="text-gray-900">{t.summary.totalPrice}</span>
                        <span className="text-gray-900">
                          {calculateTotal(formData.products).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {t.previous}
                </button>
              )}
              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t.next}
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t.submit}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Order; 