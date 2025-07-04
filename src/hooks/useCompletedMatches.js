import { useQuery } from '@tanstack/react-query';
import { getCompletedMatches } from '../services/apiCalls/matchApi';

export const useCompletedMatches = () => {
    return useQuery({
      queryKey: ['completedMatches'],
      queryFn: getCompletedMatches,
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 10, // 10 minutes
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    });
  };