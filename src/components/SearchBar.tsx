import { useNavigate } from 'react-router-dom';

import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();

  const onHandleSubmit = (e: any) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={onHandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
      }}>
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <IconButton
        type='submit'
        onSubmit={onHandleSubmit}
        sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
