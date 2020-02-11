import { ThunkAction } from "redux-thunk";
import { Action } from 'redux'
import { URL } from '../API/api'
import { FETCH_NEWS_START, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAIL } from '../const/const'

type responseType = {
  status: string;
  totalResults: number;
  articles: [];
}

export const getNews = (): ThunkAction<void, Promise<any>, Action<string>, Action<string>> => dispatch => {
  dispatch({
    type: FETCH_NEWS_START
  });

  fetch(URL)
    .then(response => response.json())
    .then((response: responseType) => dispatch(
      {
        type: FETCH_NEWS_SUCCESS,
        payload: response.articles
      }
    ),
      error =>
        dispatch({
          type: FETCH_NEWS_FAIL,
          payload: { error: Object }
        })
    );
};
