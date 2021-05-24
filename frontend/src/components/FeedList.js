import List from '@material-ui/core/List';
import { useSelector } from 'react-redux'
import FeedListItem from './FeedListItem';
import {
  filteredFeedSelector,
} from '../store/selectors';

const FeedList = () => {
  const feed = useSelector(filteredFeedSelector);
  console.log(feed);
  return (
    <List>
      {
        feed.map(entry => (
          <FeedListItem key={entry.id} id={entry.id} entry={entry} />
        ))
      }
    </List>
  );
};

export default FeedList;
