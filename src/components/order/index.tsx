import { Card, CardContent, Typography } from "@mui/material";

import styles from './styles.module.css';
import { useAppSelector } from "../../hooks/useRedux";

function Order() {
    const { total, products } = useAppSelector((state) => state.products);

    function getAmountProducts() {
        return products.reduce((amountProduct, product) => {
            amountProduct += product.count;

            return amountProduct;
        }, 0);
    }

    return (
        <Card className={styles.card}>
            <CardContent>
            <Typography variant='h5'>
                Итого: {Math.abs(total).toFixed(2)} руб.
            </Typography>
            <Typography variant='body2' color='text.secondary'>
                Всего товаров в корзине: {getAmountProducts()}
            </Typography>
            </CardContent>
      </Card>
    )
}

export default Order;