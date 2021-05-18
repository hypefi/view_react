import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import Box from '@material-ui/core/Box';
import FeedSelector from './FeedSelector';
import Filter from './Filter';
import FeedList from './FeedList';
import TopBar from './TopBar';

import { loadFeed } from '../store/actionCreators';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFeed('topsongs'))
  }, [dispatch]);

  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <TopBar />
      <Box
        flexDirection="column"
        width='100%'
        maxWidth={600}
        paddingTop={2}
        paddingRight={2}
        paddingLeft={2}
      >
        <Box paddingBottom={1}>
          <Filter />
        </Box>
        <FeedSelector />
        <FeedList />
      </Box>
    </Box>
  );
}

export default App;
