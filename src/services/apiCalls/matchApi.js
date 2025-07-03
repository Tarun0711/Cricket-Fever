import axiosClient from '../api';

export const getUpcomingMatches = async () => {
  const response = await axiosClient.get('/matches/upcoming');
  return response.data;
  console.log("hooke",response.data)
};

export const getMatchDetails = async (matchId) => {
  const response = await axiosClient.get(`/matches/${matchId}`);
  return response.data;
};

  