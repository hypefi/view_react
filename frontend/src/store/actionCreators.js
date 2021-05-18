import {
  LOAD_FEED_START,
  LOAD_FEED_SUCCESS,
  LOAD_FEED_ERROR,
  CHANGE_SEARCH_TERM,
} from './actions';

import fetchFeed from '../api/fetchFeed';

const loadFeedStart = (feedType) => (dispatch) => dispatch({
  type: LOAD_FEED_START,
  payload: { feedType },
});

const loadFeedSuccess = (feed) => (dispatch) => dispatch({
  type: LOAD_FEED_SUCCESS,
  payload: { feed },
});

const loadFeedError = (error) => (dispatch) => dispatch({
  type: LOAD_FEED_ERROR,
  payload: { error },
});

export const loadFeed = (feedType) => async (dispatch) => {
  dispatch(loadFeedStart(feedType));

  try {
    const feed = await fetchFeed(feedType);
    dispatch(loadFeedSuccess(feed));
  } catch (e) {
    dispatch(loadFeedError(e));
  }
};

export const changeSearchTerm = (searchTerm) => (dispatch) => dispatch({
  type: CHANGE_SEARCH_TERM,
  payload: { searchTerm },
});
