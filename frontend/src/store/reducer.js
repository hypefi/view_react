import {
  LOAD_FEED_START,
  LOAD_FEED_SUCCESS,
  CHANGE_SEARCH_TERM,
} from './actions';

const initialState = {
  feed: [],
  feedType: 'topsongs',
  searchTerm: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FEED_START:
      return {
        ...state,
        feed: [],
        feedType: action.payload.feedType,
        searchTerm: '',
      };
    case LOAD_FEED_SUCCESS:
      return {
        ...state,
        feed: action.payload.feed,
      };
    case CHANGE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
      };
    default:
      return state;
  }
};

export default reducer;
