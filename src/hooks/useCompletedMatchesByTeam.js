import { useQuery } from '@tanstack/react-query';
import { getCompletedMatchesByCountry } from '../services/apiCalls/matchApi';

export const useCompletedMatchesByCountry = (countryCode) => {
  return useQuery({
    queryKey: ['upcomingMatchesByCountry', countryCode],
    queryFn: () => getCompletedMatchesByCountry(countryCode),
    enabled: !!countryCode,
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: true,
  });
}; 