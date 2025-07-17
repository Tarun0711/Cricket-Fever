import axios from 'axios';

const NEWS_API_URL = 'https://wicketfever.onrender.com/api/unofficial/news';

export const getCricketNews = async () => {
  try {
    const response = await axios.get(NEWS_API_URL);
    return response.data.data;
  } catch (error) {
    console.error('News API Error:', error);
    throw error;
  }
};
