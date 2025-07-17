import { useQuery } from '@tanstack/react-query';
import { getMatchSummary } from '../services/apiCalls/matchApi';

export const useGetMatchSummary = (matchId) => {
  return useQuery({
    queryKey: ['matchSummary', matchId],
    queryFn: () => getMatchSummary(matchId),
    enabled: !!matchId,
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: true,
  });
};
