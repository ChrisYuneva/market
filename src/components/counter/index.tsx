import { Box, IconButton, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import { useAppDispatch } from '../../hooks/useRedux';
import { productsSlice } from '../../store/products/productsSlice';

import styles from './styles.module.css';

interface CounterProps {
  id: number;
  count: number;
}

const { plusProduct, minusProduct } = productsSlice.actions;

function Counter({ id, count }: CounterProps) {
  const dispatch = useAppDispatch();

  function plusProductToBasket() {
    dispatch(plusProduct(id));
  }

  function minusProductToBasket() {
    dispatch(minusProduct(id));
  }

  return (
    <Box className={styles.counter}>
      <IconButton
        aria-label='Уменьшить количество товара на 1'
        onClick={minusProductToBasket}
        disabled={count === 1}
        color='info'
      >
        <RemoveIcon />
      </IconButton>
      <Typography variant='subtitle1'>{count}</Typography>
      <IconButton
        aria-label='Увеличить количество товара на 1'
        onClick={plusProductToBasket}
        disabled={count === 10}
        color='info'
      >
        <AddOutlinedIcon />
      </IconButton>
    </Box>
  );
}

export default Counter;