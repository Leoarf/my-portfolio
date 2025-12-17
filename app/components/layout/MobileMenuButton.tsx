'use client';

import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      className="lg:hidden p-1.5 sm:p-2"
      onClick={onClick}
      aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
    >
      {isOpen ? (
        <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300" />
      ) : (
        <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  );
}
