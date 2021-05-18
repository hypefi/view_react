import { useCallback } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector, useDispatch } from 'react-redux'
import { changeSearchTerm } from '../store/actionCreators';
import {
  feedTypeSelector,
  searchTermSelector,
} from '../store/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(searchTermSelector);
  const feedType = useSelector(feedTypeSelector);
  const placeholderItem = feedType === 'topsongs'
    ? 'Songs'
    : 'Albums';

  const handleChange = useCallback((event) => {
    dispatch(changeSearchTerm(event.target.value));
  }, [dispatch]);

  return (
    <TextField
      variant="outlined"
      fullWidth
      placeholder={`Search ${placeholderItem}`}
      value={searchTerm}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
};

export default Filter;
