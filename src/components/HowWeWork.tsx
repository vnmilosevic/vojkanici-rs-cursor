import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import GalleryModal from './GalleryModal';

export default function HowWeWork() {
  const { t } = useLanguage();
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryImage = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80';
  const galleryImages = Array(12).fill(galleryImage);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryModalOpen(true);
  };

  return (
    <section id="how-we-work" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-gray-100 px-4 py-2 rounded-full mb-6">
              <span className="text-gray-900 text-sm font-medium">{t.howWeWork.tagline}</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              {t.howWeWork.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t.howWeWork.description}
            </p>
            <Link
              href="#order"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              {t.howWeWork.cta}
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => handleImageClick(index)}
                className="aspect-square relative rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  loading={index < 4 ? "eager" : "lazy"}
                  quality={75}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <GalleryModal
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        initialImageIndex={selectedImageIndex}
      />
    </section>
  );
} 