import axios from "axios";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";

const localFile = path.resolve(__dirname, "../.env.local");

const catchFile = (p) => (fs.existsSync(p) ? p : "");

dotenv.config({
  path: catchFile(localFile),
});

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

export { data };

export default {
  async load() {
    const url = `https://api.tmdb.org/3/account/${process.env.VITE_TMDB_ACCOUNT_ID}/favorite/tv?language=zh-CN&page=1&sort_by=created_at.asc`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.VITE_AUTHORIZATION_TOKEN,
      },
    };

    try {
      const { data } = await axios.get<{
        results: TMDBMovie[];
      }>(url, options);

      return data.results;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};
