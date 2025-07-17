import { useQuery } from '@tanstack/react-query';
import { getMatchCommentary } from '../services/apiCalls/matchApi';

export const useGetCommentry = (matchId, pageKey) => {
  return useQuery({
    queryKey: ['matchCommentary', matchId, pageKey],
    queryFn: () => getMatchCommentary(matchId, pageKey),
    enabled: !!matchId,
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: true,
  });
};
