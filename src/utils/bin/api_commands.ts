// // List of commands that require API calls

import { getRepos } from '../api';
import { getQuote } from '../api';
import { getWeather } from '../api';

export const repositories = async (args: string[]): Promise<string> => {
  const repositories = await getRepos();
  return repositories
    .filter(repo =>
       repo.name !== 'as_son_of_hunkypunk' && repo.name !== 'fluxmap'
    ).map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};
