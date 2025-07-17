import { useQuery } from '@tanstack/react-query';
import { getPlayerRankings } from '../services/apiCalls/matchApi';

export const useGetPlayerRank = ({ category = 'batsmen', format = 'odi', gender = 'men' } = {}) => {
  return useQuery({
    queryKey: ['playerRankings', category, format, gender],
    queryFn: () => getPlayerRankings({ category, format, gender }),
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchOnWindowFocus: true,
  });
};
