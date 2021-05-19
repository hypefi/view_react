import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Switch from '@material-ui/core/Switch';
import React, { useState } from 'react';


const FeedListItem = ({
  entry: {
    name,
    image,
    link,
    artist,
  },
}) => {
const [checked, setChecked] = useState();  

const handleChange = event => {
  setChecked(event.target.checked);

};

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
    <Switch onClick={e => e.preventDefault()} onChange={handleChange} checked={checked || false} checkedIcon={<Favorite />} UncheckedIcon={<FavoriteBorder />} />
      </ListItem>

  </Link>
);
};


export default FeedListItem;
