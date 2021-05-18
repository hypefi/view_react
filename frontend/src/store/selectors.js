import { createSelector } from 'reselect';

const feedSelector = (state) => state.feed;

export const feedTypeSelector = (state) => state.feedType;
export const searchTermSelector = (state) => state.searchTerm;
export const filteredFeedSelector = createSelector(
  feedSelector,
  searchTermSelector,
  (feed, searchTerm) => searchTerm
    ? feed.filter(entry => entry.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : feed,
);
