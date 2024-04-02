import axios from "axios";

/**
 * Interface for the TMDB API response
 */
interface TMDBMovie {
  adult: string;
  backdrop_path: string;
  genre_ids: number[];
  id: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: string;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: string;
  vote_count: string;
}

declare const data: TMDBMovie[];

console.log("import.meta.env = ", import.meta.env);

export { data };

export default {
  async load() {
    const url = `https://api.tmdb.org/3/account/${
      import.meta.env.VITE_TMDB_ACCOUNT_ID
    }/favorite/tv?language=zh-CN&page=1&sort_by=created_at.asc`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTHORIZATION_TOKEN,
      },
    };

    try {
      const { data } = await axios.get(url, options);

      return data.results;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};
