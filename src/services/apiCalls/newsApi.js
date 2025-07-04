import axios from 'axios';

const NEWS_API_URL = 'https://wicketfever.onrender.com/api/unofficial/news';

// Simple in-memory cache
let cachedNews = null;
let cacheTimestamp = null;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

export const getCricketNews = async () => {
  const now = Date.now();
  if (cachedNews && cacheTimestamp && (now - cacheTimestamp < CACHE_DURATION)) {
    return cachedNews;
  }

  try {
    const response = await axios.get(NEWS_API_URL);
    cachedNews = response.data;
    cacheTimestamp = now;
    return response.data;
  } catch (error) {
    console.error('News API Error:', error);
    throw error;
  }
};
