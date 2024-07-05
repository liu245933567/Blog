import axios from "axios";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";

const localFile = path.resolve(__dirname, "../.env.local");

const catchFile = (p: string) => (fs.existsSync(p) ? p : "");

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

  // 电影属性
  title: string;
  release_date: string;
}

type DataType = {
  movies: TMDBMovie[];
  tv: TMDBMovie[];
};

declare const data: DataType;

export { data };

export default {
  async load(): Promise<DataType> {
    const movieUrl = `https://api.tmdb.org/3/account/${process.env.VITE_TMDB_ACCOUNT_ID}/favorite/movies?language=zh-CN&page=1&sort_by=created_at.asc`;
    const tvUrl = `https://api.tmdb.org/3/account/${process.env.VITE_TMDB_ACCOUNT_ID}/favorite/tv?language=zh-CN&page=1&sort_by=created_at.asc`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.VITE_AUTHORIZATION_TOKEN,
      },
    };

    try {
      const { data: movieRes } = await axios.get<{
        results: TMDBMovie[];
      }>(movieUrl, options);

      const { data: tvRes } = await axios.get<{
        results: TMDBMovie[];
      }>(tvUrl, options);

      return {
        movies: movieRes.results,
        tv: tvRes.results,
      };
    } catch (error) {
      console.error(error);
      return {
        movies: [],
        tv: [],
      };
    }
  },
};
