import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Counter from '../counter';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../hooks/useRedux';
import { productsSlice } from '../../store/products/productsSlice';

import styles from './styles.module.css';

interface ProductCardProps {
  id: number;
  imgSrc: string;
  name: string;
  description: string;
  price: number;
  count: number;
}

const { deleteProduct } = productsSlice.actions;

function ProductCard({ id, imgSrc, name, description, price, count }: ProductCardProps) {
  const dispatch = useAppDispatch();

  function deleteProductFromBasket() {
    dispatch(deleteProduct(id));
  }

  return (
    <Card className={styles.card}>
      <CardMedia
        component='img'
        image={imgSrc}
        alt={`${name} image`}
        className={styles.cardMedia}
      />
      <CardContent className={styles.cardContent}>
        <Typography variant='h5'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      <CardActions className={styles.cardActions}>
        <Typography variant='h5'>
          {`${price.toFixed(2)} руб.`}
        </Typography>
        <Box className={styles.actions}>
          <Button
            color='warning'
            variant='outlined'
            startIcon={<DeleteIcon />}
            aria-label='Удалить товар из корзины'
            onClick={deleteProductFromBasket}
          >
            Удалить
          </Button>
          <Counter id={id} count={count} />
        </Box>
      </CardActions>
    </Card>
  );
}

export default ProductCard;