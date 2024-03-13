import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Counter from "../counter";
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './styles.module.css';
import { useAppDispatch } from "../../hooks/useRedux";
import { productsSlice } from "../../store/products/productsSlice";

interface ProductCardProps {
    id: number,
    imgSrc: string,
    name: string,
    description: string,
    price: number,
    count: number,
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
        height='194'
        image={imgSrc}
        alt='Paella dish'
        className={styles.cardMedia}
      />
      <CardContent className={styles.cardContent}>
        <Typography variant='h5' color='text.secondary'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
        <Box>
            <Typography variant='h5' color='text.secondary'>
                {`${price} руб.`}
            </Typography>
            <Box className={styles.actions}>
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={deleteProductFromBasket}>
                Удалить
            </Button>
                <Counter id={id} count={count}/>
            </Box>
        </Box>
        
      </CardContent>
    </Card>
  );
}

export default ProductCard;
