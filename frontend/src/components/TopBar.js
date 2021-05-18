import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const TopBar = () => (
  <>
    <AppBar position="fixed">
      <Toolbar color="secondary">
        <Typography variant="h6" color="inherit">
          AulaTunes
        </Typography>
      </Toolbar>
    </AppBar>
    <Toolbar />
  </>
);

export default TopBar;
