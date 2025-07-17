import { useQuery } from '@tanstack/react-query';
import { getBestBowlers } from '../services/apiCalls/matchApi';

export const useBestBowlers = (matchId) => {
  return useQuery({
    queryKey: ['bestBowlers', matchId],
    queryFn: () => getBestBowlers(matchId),
    enabled: !!matchId,
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: true,
  });
}; 