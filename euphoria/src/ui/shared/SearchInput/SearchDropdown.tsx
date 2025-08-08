'use client';

import { useState, useEffect, useRef, useTransition } from 'react';

// Actions
import { getProducts } from '@/actions';

// Components
import { SearchItem } from './SearchItem';
import { SearchItemSkeleton } from './SearchItemSkeleton';

// Hooks
import { useToast } from '@/hooks';

// Types
import { Product } from '@/types';

// Utils
import { cn } from '@/utils';

interface SearchDropdownProps {
  isOpen: boolean;
  searchTerm: string;
  className?: string;
  onClose: () => void;
}

export const SearchDropdown = ({
  searchTerm,
  isOpen,
  onClose,
  className,
}: SearchDropdownProps) => {
  const { error: errorToast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [isPending, startTransition] = useTransition();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!searchTerm.trim() || searchTerm.length < 2) {
        setProducts([]);
        return;
      }

      startTransition(async () => {
        const { data: response, error } = await getProducts({
          name: searchTerm,
          pageSize: 5,
        });

        if (error) {
          errorToast({ title: 'Error', description: error });
          setProducts([]);
          return;
        }

        setProducts(response || []);
      });
    };

    const timeoutId = setTimeout(fetchProducts, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm, errorToast]);

  if (
    !isOpen ||
    (!isPending && products.length === 0 && searchTerm.length < 2)
  ) {
    return null;
  }

  return (
    <div
      ref={dropdownRef}
      role="listbox"
      aria-label="Search results"
      className={cn(
        'absolute top-full left-0 right-0 mt-1 bg-background-primary border border-border-primary rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto',
        className,
      )}
    >
      {isPending ? (
        <div className="p-4 space-y-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <SearchItemSkeleton key={index} />
          ))}
        </div>
      ) : products.length > 0 ? (
        <div className="py-2">
          {products.map((product) => (
            <SearchItem key={product.id} product={product} onClose={onClose} />
          ))}
        </div>
      ) : searchTerm.length >= 2 ? (
        <div
          className="font-causten px-4 py-3 text-sm text-text-primary"
          role="status"
          aria-live="polite"
        >
          No products found for &quot;{searchTerm}&quot;
        </div>
      ) : null}
    </div>
  );
};
