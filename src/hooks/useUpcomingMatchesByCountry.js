import { useQuery } from '@tanstack/react-query';
import { getUpcomingMatchesByCountry } from '../services/apiCalls/matchApi';

export const useUpcomingMatchesByCountry = (countryCode) => {
  return useQuery({
    queryKey: ['upcomingMatchesByCountry', countryCode],
    queryFn: () => getUpcomingMatchesByCountry(countryCode),
    enabled: !!countryCode,
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: true,
  });
}; 