import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  Feed,
  SearchFeed,
  VideoDetail,
  ChannelDetail,
  NavBar
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#212121' }}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
