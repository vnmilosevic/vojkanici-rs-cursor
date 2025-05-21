import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialImageIndex?: number;
}

const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80',
    alt: 'Pogled na naše gazdinstvo',
    description: 'Naše porodično gazdinstvo se prostire na preko 10 hektara zemlje, gde uzgajamo organske proizvode u skladu sa prirodom.',
    thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80',
    alt: 'Krave na pašnjaku',
    description: 'Naše krave se slobodno kreću po pašnjacima, gde se hrane prirodnom travom i žive u skladu sa svojim prirodnim instinktima.',
    thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80',
    alt: 'Proizvodnja sira',
    description: 'Tradicionalna proizvodnja sira od svežeg mleka, koristeći recepte koji se prenose kroz generacije.',
    thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80',
    alt: 'Povrtnjak',
    description: 'Naš povrtnjak je pun sezonskog povrća koje uzgajamo bez upotrebe veštačkih đubriva i pesticida.',
    thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80',
    alt: 'Kokošinjac',
    description: 'Naše kokoške žive u prostranim kokošincima sa pristupom slobodnom prostoru, gde se hrane prirodnom hranom.',
    thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80'
  }
];

export default function GalleryModal({ isOpen, onClose, initialImageIndex = 0 }: GalleryModalProps) {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(initialImageIndex);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="relative w-full h-full max-w-7xl max-h-[90vh] p-4">
        {/* Close button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-foreground hover:text-primary z-10"
          aria-label={t.gallery.close}
        >
          <X className="w-6 h-6" />
        </Button>

        {/* Navigation buttons */}
        <Button
          onClick={handlePrevious}
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground hover:text-primary z-10"
          aria-label={t.gallery.previous}
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>
        <Button
          onClick={handleNext}
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground hover:text-primary z-10"
          aria-label={t.gallery.next}
        >
          <ChevronRight className="w-8 h-8" />
        </Button>

        {/* Main image */}
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
            priority
          />
          {/* Image description */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm text-foreground p-4 rounded-lg max-w-2xl text-center border border-border">
            <p className="text-sm">{images[currentIndex].description}</p>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-16 h-16 rounded overflow-hidden transition-all duration-200 ${
                index === currentIndex ? 'ring-2 ring-primary' : 'hover:ring-2 hover:ring-primary/50'
              }`}
            >
              <Image
                src={image.thumbnail}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 