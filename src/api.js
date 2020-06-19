import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  // params: {
  //   api_key: "4e88b4f1dedb08e14ee3e3dbe7eeb858",
  //   language: "en-US",
  // },
});
api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = "4e88b4f1dedb08e14ee3e3dbe7eeb858";
  config.params["language"] = "en-US";
  return config;
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upComing: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("/search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  tvDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "video",
      },
    }),
  search: (term) =>
    api.get("/search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
