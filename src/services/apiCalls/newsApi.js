import axios from 'axios';

const NEWS_API_KEY = '577147db083f46449921dba74ba62219';
const NEWS_API_URL = 'https://newsapi.org/v2/everything';

// Simple in-memory cache
let cachedNews = null;
let cacheTimestamp = null;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

export const getCricketNews = async (options = {}) => {
  const now = Date.now();
  if (cachedNews && cacheTimestamp && (now - cacheTimestamp < CACHE_DURATION)) {
    return cachedNews;
  }

  const params = {
    q: 'cricket',
    apiKey: NEWS_API_KEY,
    language: 'en',
    sortBy: 'publishedAt',
    ...options,
  };

  try {
    const response = await axios.get(NEWS_API_URL, { params });
    cachedNews = response.data;
    cacheTimestamp = now;
    return response.data;
  } catch (error) {
    console.error('News API Error:', error);
    throw error;
  }
};
