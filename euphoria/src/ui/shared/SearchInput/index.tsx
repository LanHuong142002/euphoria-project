'use client';

import { useState, useCallback, useEffect, ChangeEvent } from 'react';

// Constants
import { TIMING } from '@/constants';

// Components
import { Input } from '@/ui/components/common/Input';
import { SearchIcon } from '@/ui/icons/SearchIcon';

// Hooks
import { useDebounce, useGetParams } from '@/hooks';

// Utils
import { cn } from '@/utils';

interface SearchInputProps {
  className?: string;
}

export const SearchInput = ({ className }: SearchInputProps) => {
  const { params, router } = useGetParams();
  const [search, setSearch] = useState(params.get('name') || '');
  const [hasInteracted, setHasInteracted] = useState(false);
  const debouncedSearch = useDebounce(search, TIMING.DEBOUNCE_DELAY);

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setHasInteracted(true);
  }, []);

  const updateURLParams = useCallback(
    (searchTerm: string) => {
      const newParams = new URLSearchParams();

      if (searchTerm.trim()) {
        newParams.set('name', searchTerm);
      } else {
        newParams.delete('name');
      }

      router.push(`?${newParams.toString()}`);
    },
    [router],
  );

  const handleSearch = useCallback(
    (searchTerm: string) => {
      updateURLParams(searchTerm);
    },
    [updateURLParams],
  );

  useEffect(() => {
    if (hasInteracted) {
      handleSearch(debouncedSearch);
    }
  }, [debouncedSearch, handleSearch, hasInteracted]);

  return (
    <Input
      leftElement={<SearchIcon />}
      value={search}
      onChange={handleSearchChange}
      placeholder="Search"
      variant="tertiary"
      size="md"
      className={cn('w-[267px] h-11', className)}
    />
  );
};
