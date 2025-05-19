import { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isOrderModalOpen: boolean;
  openOrderModal: () => void;
  closeOrderModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const openOrderModal = () => setIsOrderModalOpen(true);
  const closeOrderModal = () => setIsOrderModalOpen(false);

  return (
    <ModalContext.Provider value={{ isOrderModalOpen, openOrderModal, closeOrderModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
} 