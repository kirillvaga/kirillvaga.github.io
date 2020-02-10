import { ThunkAction } from "redux-thunk";
import { URL } from '../API/api'
import { FETCH_NEWS_START, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAIL} from '../const/const'

export const getNews = (): ThunkAction<any, any, any, any> => dispatch => {
  dispatch({
    type: FETCH_NEWS_START
  });

  fetch(URL)
    .then(response => response.json())
    .then((response: any) => dispatch(
      { 
        type: FETCH_NEWS_SUCCESS, 
        payload: response.articles}
      ),
    error =>
      dispatch({
        type: FETCH_NEWS_FAIL,
        payload: { error }
      })
  );
};
