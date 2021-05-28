import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

function usePersistedState(key, defaultValue) {
  let jspars = JSON.parse(localStorage.getItem(key));
  console.log("jspars", jspars, localStorage.getItem(key), key);

  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );

  useEffect(() => {
    localStorage.setItem(JSON.stringify(state), key);
  }, [key, state]);

  return [state, setState];
}

const FeedListItem = ({
  entry: {
    name,
    image,
    link,
    artist,
  },
  id,
}) => {
//https://dev.to/selbekk/persisting-your-react-state-in-9-lines-of-code-9go
const [checkedir, setChecked] = usePersistedState(id, false); 

const handleChange = event => { 
  event.preventDefault();
  event.stopPropagation();
  event.nativeEvent.stopImmediatePropagation();

  console.log('checked?', event.target.checked);
  console.log(id, event.target.checked);
  setChecked(id, event.target.checked);
};

useEffect(() => {
  console.log("component updated");  
  console.log("checkedir", checkedir, "id", id);
    let stt = JSON.parse(localStorage.getItem(id)) || false;
    console.log(stt);
  }, [checkedir]);

return(
  <Link href={link} target="_blank" underline="none" color="inherit">
  <ListItem button>
    <ListItemAvatar>
      <Avatar alt={name} src={image} />
    </ListItemAvatar>
    <ListItemText
      primary={name}
      secondary={artist}
    />
    <Checkbox onChange={handleChange} checked={checkedir || false} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
    </ListItem>
  </Link>
);
};

export default FeedListItem;
