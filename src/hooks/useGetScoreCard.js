import { useQuery } from '@tanstack/react-query';
import { getScoreCardDetailed } from '../services/apiCalls/matchApi';

export const useGetScoreCard = (matchId) => {
  return useQuery({
    queryKey: ['scoreCardDetailed', matchId],
    queryFn: () => getScoreCardDetailed(matchId),
    enabled: !!matchId,
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: true,
  });
};
