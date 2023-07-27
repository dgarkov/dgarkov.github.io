import axios from 'axios';
import config from '../../config.json';

export const getRepos = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos?type=all&sort=pushed`,
  );
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`, { crossdomain: true });
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random', { crossdomain: true });
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};
