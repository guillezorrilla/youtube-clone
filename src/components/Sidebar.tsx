import { Divider, Stack } from '@mui/material';
import { FC, Fragment } from 'react';
import { ICategories } from '../models';

import { categories } from '../utils/constants';

interface ISideBarProps {
  selectedCategory: string;
  setSeletecCategory: (category: string) => void;
}

const Sidebar: FC<ISideBarProps> = ({
  selectedCategory,
  setSeletecCategory
}: ISideBarProps) => {
  return (
    <Stack
      direction='row'
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' }
      }}>
      {categories.map((category: ICategories, index: number) => {
        const CategoryIcon = category.icon;
        return (
          <Fragment key={`${category.name}-${index}`}>
            <button
              className='category-btn'
              onClick={() => setSeletecCategory(category.name)}
              style={{
                backgroundColor:
                  category.name === selectedCategory ? '#616161' : 'inherit',
                color: 'white'
              }}>
              <span
                style={{
                  color: 'white',
                  marginRight: '15px'
                }}>
                <CategoryIcon />
              </span>
              <span
                style={{
                  opacity: category.name === selectedCategory ? '1' : '0.8'
                }}>
                {category.name}
              </span>
            </button>
            <Divider sx={{ borderColor: 'white' }} />
          </Fragment>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
