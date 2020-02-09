import {FETCH_NEWS_START, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAIL} from '../actions/newsAction'
const initialState = {
  isLoading: false,
  cards:[]
};

const newsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_NEWS_START:
      return {
        isLoading: true
      };
      case FETCH_NEWS_SUCCESS:
        return {
          isLoading: false,
          cards: action.payload
        }
        case FETCH_NEWS_FAIL:
          return {
            isLoading: false
          }
    default:
      return state;
  }
}

export default newsReducer;
