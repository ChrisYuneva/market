import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Counter from "../counter";

import styles from './styles.module.css';

interface ProductCardProps {
    imgSrc: string,
    name: string,
    description: string,
    price: number,
}

function ProductCard({ imgSrc, name, description, price }: ProductCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='194'
        image={imgSrc}
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='h5' color='text.secondary'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
        <Typography variant='h5' color='text.secondary'>
          {price}
        </Typography>
        <Box className={styles.actions}>
            <Button>fse+f</Button>
            <Counter />
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
