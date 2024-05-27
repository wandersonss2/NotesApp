import { AppBar, Toolbar, Typography } from '@mui/material';
import { logo } from '../constants/constant'
const Header = () => {
    return (
        <AppBar color="transparent" position='static'>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 100, marginRight: 1 }} />
                <Typography>Sex Shop Notes</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;