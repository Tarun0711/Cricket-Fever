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

export const getMatchSummary = async (matchId) => {
  if (!matchId) throw new Error('matchId is required');
  const response = await axiosClient.get(`/matches/${matchId}/summary`);
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

export const getScoreCardDetailed = async (matchId) => {
  if (!matchId) throw new Error('matchId is required');
  const response = await axiosClient.get(`/matches/${matchId}/scorecard-detailed`);
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

export const getCountryFlag = async (countryCode) => {
  if (!countryCode) throw new Error('countryCode is required');

  try {
    const response = await axiosClient.get(`/countries/${countryCode}/flag`);
    const data = response.data;

    if (data) {
      return data; // expected to be an image URL
    } else {
      return generateSvgDataUri(countryCode);
    }
  } catch (error) {
    console.error(`Error fetching flag for ${countryCode}:`, error.message);
    return generateSvgDataUri(countryCode);
  }
};

export const getBestBatters = async (matchId) => {
  if (!matchId) throw new Error('matchId is required');
  const response = await axiosClient.get(`/matches/${matchId}/best-performances/batters`);
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

export const getBestBowlers = async (matchId) => {
  if (!matchId) throw new Error('matchId is required');
  const response = await axiosClient.get(`/matches/${matchId}/best-performances/bowling`);
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

export const getMatchCommentary = async (matchId, pageKey) => {
  if (!matchId) throw new Error('matchId is required');
  let url = `/matches/${matchId}/commentary/`;
  if (pageKey) {
    url += `?page_key=${encodeURIComponent(pageKey)}`;
  }
  const response = await axiosClient.get(url);
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

export const getTeamRankings = async ({ format = 'odi', gender = 'men' } = {}) => {
  try {
    const response = await axiosClient.get(`/rankings/teams?format=${encodeURIComponent(format)}&gender=${encodeURIComponent(gender)}`);
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
  } catch (error) {
    console.error('Error fetching team rankings:', error);
    throw error;
  }
};

export const getPlayerRankings = async ({ category = 'batsmen', format = 'odi', gender = 'men' } = {}) => {
  try {
    const response = await axiosClient.get(`/rankings/players?category=${encodeURIComponent(category)}&format=${encodeURIComponent(format)}&gender=${encodeURIComponent(gender)}`);
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
  } catch (error) {
    console.error('Error fetching player rankings:', error);
    throw error;
  }
};

export const getUpcomingMatchesByCountry = async (countryCode) => {
  if (!countryCode) throw new Error('countryCode is required');
  
  const response = await axiosClient.get(`/matches/upcoming/country/${countryCode}`);
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

export const getCompletedMatchesByCountry = async (countryCode) => {
  if (!countryCode) throw new Error('countryCode is required');
  
  const response = await axiosClient.get(`/matches/completed/country/${countryCode}`);
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

const generateSvgDataUri = (countryCode) => {
  const initials = (countryCode || '??').toUpperCase().slice(0, 2);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="48" viewBox="0 0 64 48">
      <rect width="64" height="48" fill="#e0e0e0"/>
      <text x="32" y="28" font-size="18" font-family="Arial, sans-serif"
            text-anchor="middle" fill="#333">${initials}</text>
    </svg>
  `.trim();

  // Convert SVG to base64 (safest for <img src>)
  const base64 = btoa(unescape(encodeURIComponent(svg)));
  return `data:image/svg+xml;base64,${base64}`;
};
