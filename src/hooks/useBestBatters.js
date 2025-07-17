import { useQuery } from '@tanstack/react-query';
import { getBestBatters } from '../services/apiCalls/matchApi';

export const useBestBatters = (matchId) => {
  return useQuery({
    queryKey: ['bestBatters', matchId],
    queryFn: () => getBestBatters(matchId),
    enabled: !!matchId,
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: true,
  });
}; 