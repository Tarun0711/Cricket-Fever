import { useQuery } from '@tanstack/react-query';
import { getUpcomingMatches } from '../services/apiCalls/matchApi';

export const useUpcomingMatches = () => {
  return useQuery({
    queryKey: ['upcomingMatches'],
    queryFn: getUpcomingMatches,
    staleTime: 1000 * 60 * 5, // 5 mins
    refetchOnWindowFocus: true,
  });
};
