import { ThunkAction } from "redux-thunk";

export const FETCH_NEWS_START = 'FETCH_NEWS_START';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAIL = 'FETCH_NEWS_FAIL';
export const URL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=251501d9720d4d64aa038e7977116df5';

export const getNews = (): ThunkAction<any, any, any, any> => dispatch => {
  dispatch({
    type: FETCH_NEWS_START
  });

  fetch(URL).then(response => response.json()).then(
    (response: any) =>
      dispatch({
        type: FETCH_NEWS_SUCCESS,
        payload: response.articles
      }),
    error =>
      dispatch({
        type: FETCH_NEWS_FAIL,
        payload: { error }
      })
  );
};
