import { Box, IconButton, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveIcon from '@mui/icons-material/Remove';

import styles from './styles.module.css';
import { useAppDispatch } from '../../hooks/useRedux';
import { productsSlice } from '../../store/products/productsSlice';

interface CounterProps {
    id: number,
    count: number,
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
      <IconButton aria-label='Уменьшить количство товара на 1' onClick={minusProductToBasket} disabled={count===1}>
        <RemoveIcon />
      </IconButton>
      <Typography>{count}</Typography>
      <IconButton aria-label='Увеличить количство товара на 1' onClick={plusProductToBasket} disabled={count===10}>
        <AddOutlinedIcon />
      </IconButton>
    </Box>
  );
}

export default Counter;
