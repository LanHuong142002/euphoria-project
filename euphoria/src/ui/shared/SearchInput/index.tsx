'use client';

import { useState, useCallback, ChangeEvent, KeyboardEvent } from 'react';

// Constants
import { TIMING } from '@/constants';

// Components
import { Input } from '@/ui/components/common/Input';
import { SearchIcon } from '@/ui/icons/SearchIcon';
import { SearchDropdown } from './SearchDropdown';

// Hooks
import { useDebounce } from '@/hooks';

// Utils
import { cn } from '@/utils';

interface SearchInputProps {
  className?: string;
  onClick?: () => void;
}

export const SearchInput = ({ className, onClick }: SearchInputProps) => {
  const [search, setSearch] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const debouncedSearch = useDebounce(search, TIMING.DEBOUNCE_DELAY);

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    setIsDropdownOpen(true);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setIsDropdownOpen(false);
    }
  }, []);

  const handleInputFocus = useCallback(() => {
    if (search.trim()) {
      setIsDropdownOpen(true);
    }
  }, [search]);

  const handleDropdownClose = useCallback(() => {
    setIsDropdownOpen(false);
    onClick?.();
  }, [onClick]);

  return (
    <div className="relative">
      <Input
        leftElement={<SearchIcon />}
        value={search}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        onFocus={handleInputFocus}
        placeholder="Search"
        variant="tertiary"
        size="md"
        className={cn('w-[267px] h-11', className)}
      />
      <SearchDropdown
        searchTerm={debouncedSearch}
        isOpen={isDropdownOpen}
        onClose={handleDropdownClose}
      />
    </div>
  );
};
