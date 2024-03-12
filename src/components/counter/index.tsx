import { Box, IconButton, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import styles from './styles.module.css';

function Counter() {
  return (
    <Box className={styles.counter}>
      <IconButton aria-label='delete'>
        <AddOutlinedIcon />
      </IconButton>
      <Typography>3</Typography>
      <IconButton aria-label='delete'>
        <AddOutlinedIcon />
      </IconButton>
    </Box>
  );
}

export default Counter;
