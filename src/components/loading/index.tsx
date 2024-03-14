import { Backdrop, CircularProgress } from '@mui/material';

import styles from './styles.module.css';

interface LoadingProps {
  isLoading: boolean;
}

function Loading({ isLoading }: LoadingProps) {
  return (
    <Backdrop open={isLoading} className={styles.backdrop}>
      <CircularProgress size='100px' />
    </Backdrop>
  );
}

export default Loading;