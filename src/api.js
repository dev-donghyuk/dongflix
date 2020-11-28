import axios from 'axios';
import { store } from '../redux/redux';

const api = axios.create({
   baseURL: 'https://api.themoviedb.org/3/',
   headers: {
      'Access-Control-Allow-Origin': '*',
   },
});

// api 통신 base

axios.interceptors.request.use(
   function (config) {
      // 요청 바로 직전
      config.params = config.params || {};
      config.params['api_key'] = '4e88b4f1dedb08e14ee3e3dbe7eeb858';
      config.params['language'] = 'en-US';
      store.dispatch({
         type: 'SET_IS_LOADING',
         payload: true,
      });
      return config;
   },
   function (error) {
      // 요청 에러 처리를 작성합니다.
      store.dispatch({
         type: 'SET_IS_LOADING',
         payload: false,
      });
      return Promise.reject(error);
   }
);

axios.interceptors.response.use(
   function (response) {
      /* 200처리 */
      store.dispatch({
         type: 'SET_IS_LOADING',
         payload: false,
      });
      return response;
   },

   function (error) {
      /*200 외 처리*/
      store.dispatch({
         type: 'SET_IS_LOADING',
         payload: false,
      });
      return Promise.reject(error);
   }
);

// api

export const movieApi = {
   nowPlaying: () => api.get('movie/now_playing'),
   upComing: () => api.get('movie/upcoming'),
   popular: () => api.get('movie/popular'),
   movieDetail: (id) =>
      api.get(`movie/${id}`, {
         params: {
            append_to_response: 'videos',
         },
      }),
   search: (term) =>
      api.get('/search/movie', {
         params: {
            query: encodeURIComponent(term),
         },
      }),
};

export const tvApi = {
   topRated: () => api.get('tv/top_rated'),
   popular: () => api.get('tv/popular'),
   airingToday: () => api.get('tv/airing_today'),
   tvDetail: (id) =>
      api.get(`tv/${id}`, {
         params: {
            append_to_response: 'video',
         },
      }),
   search: (term) =>
      api.get('/search/tv', {
         params: {
            query: encodeURIComponent(term),
         },
      }),
};
