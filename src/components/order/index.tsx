import { Card, CardContent, Typography } from "@mui/material";

import styles from './styles.module.css';

function Order() {
    return (
        <Card className={styles.card}>
        <CardContent>
          <Typography variant='h5' color='text.secondary'>
            Итого: 
          </Typography>
          <Typography variant='h5' color='text.secondary'>
            Product description
          </Typography>
          <Typography variant='h5' color='text.secondary'>
            Name product
          </Typography>
        </CardContent>
      </Card>
    )
}

export default Order;