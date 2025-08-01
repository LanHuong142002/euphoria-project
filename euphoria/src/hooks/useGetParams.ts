'use client';

import { useRouter, useSearchParams } from 'next/navigation';

/**
 * Custom hook to get the search params
 * @returns {Object} - An object containing the params, router, and searchParams
 */
export const useGetParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  return { params, router, searchParams };
};
