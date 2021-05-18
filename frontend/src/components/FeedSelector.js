import { useMemo } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AlbumIcon from '@material-ui/icons/Album';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { useSelector, useDispatch } from 'react-redux'
import { loadFeed } from '../store/actionCreators';
import { feedTypeSelector } from '../store/selectors';

const tabs = [
  {
    feedType: 'topsongs',
    Icon: MusicNoteIcon,
    label: 'Songs',
  },
  {
    feedType: 'topalbums',
    Icon: AlbumIcon,
    label: 'Albums',
  },
];

const FeedSelector = () => {
  const dispatch = useDispatch();
  const feedType = useSelector(feedTypeSelector);
  const tabValue = useMemo(() => tabs.findIndex(tab => tab.feedType === feedType), [feedType]);
  const handleChange = (_event, newValue) => {
    dispatch(loadFeed(tabs[newValue].feedType));
  };

  return (
    <Tabs indicatorColor="primary" value={tabValue} onChange={handleChange}>
      {
        tabs.map(tab => (
          <Tab key={tab.label} icon={<tab.Icon/>} label={tab.label} />
        ))
      }
    </Tabs>
  );
};

export default FeedSelector;
