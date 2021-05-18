import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Checkbox from '@material-ui/core/Checkbox';

const FeedListItem = ({
  entry: {
    name,
    image,
    link,
    artist,
  },
}) => (
  <Link href={link} target="_blank" underline="none" color="inherit">
  <ListItem button>
    <ListItemAvatar>
      <Avatar alt={name} src={image} />
    </ListItemAvatar>
    <ListItemText
      primary={name}
      secondary={artist}
    />
    <Checkbox onClick={e => e.preventDefault()} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      </ListItem>

  </Link>
);

export default FeedListItem;
