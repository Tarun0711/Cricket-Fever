import axiosClient from '../api';

export const getUpcomingMatches = async () => {
  const response = await axiosClient.get('/matches/upcoming');
  let data = response.data;

  if (typeof data === 'string') {
    try {
      data = JSON.parse(data); 
      if (typeof data === 'string') {
        data = JSON.parse(data);
      }
    } catch (error) {
      console.error('Error parsing response data:', error);
    }
  }

  return data;
};

export const getMatchDetails = async (matchId) => {
  const response = await axiosClient.get(`/matches/${matchId}`);
  return JSON.stringify(response.data);
};

export const getCompletedMatches = async () => {
  const response = await axiosClient.get('/matches/completed');
  let data = response.data;

  if (typeof data === 'string') {
    try {
      data = JSON.parse(data); 
      if (typeof data === 'string') {
        data = JSON.parse(data);
      }
    } catch (error) {
      console.error('Error parsing response data:', error);
    }
  }

  return data;
};
