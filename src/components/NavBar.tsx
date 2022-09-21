import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { SearchBar } from '.';

import { logo } from '../utils/constants';

const NavBar = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      p={2}
      sx={{
        position: 'sticky',
        background: '#212121',
        top: 0,
        justifyContent: 'space-between'
      }}>
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt='logo' height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default NavBar;
