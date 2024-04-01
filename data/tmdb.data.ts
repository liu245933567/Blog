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

export { data };

export default {
  async load() {
    const url =
      "https://api.themoviedb.org/3/account/16441706/favorite/tv?language=zh-CN&page=1&sort_by=created_at.asc";

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDQ1NWJiMjUwZjg0ZmFjYmI2ZDU1ZDkwNDcwMzk1NiIsInN1YiI6IjYzOThhNGU2ZmQ0YTk2MDA3Zjk3ZTZiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4CSu0_eshxPejYRRKKMgM3d2oBXaxPkOHnkKMqeY69U",
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
