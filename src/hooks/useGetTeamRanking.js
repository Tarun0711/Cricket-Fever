import { useQuery } from '@tanstack/react-query';
import { getTeamRankings } from '../services/apiCalls/matchApi';

export const useGetTeamRanking = ({ format = 'odi', gender = 'men' } = {}) => {
  return useQuery({
    queryKey: ['teamRankings', format, gender],
    queryFn: () => getTeamRankings({ format, gender }),
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: true,
  });
};
