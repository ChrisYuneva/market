import { Alert, Box, Grid, Typography } from '@mui/material';
import ProductCardsContainer from './components/productCardsContainer';
import Order from './components/order';
import { useAppSelector } from './hooks/useRedux';
import Loading from './components/loading';

import './App.css';

function App() {
  const { loading, products, errorMes } = useAppSelector(state => state.products);

  return (
    <div className={'wrapper'}>
      { loading && <Loading isLoading={loading} /> }
      <Grid container spacing={2}>
        <Grid item xs={9} container rowSpacing={5} columnSpacing={2}>
          <ProductCardsContainer />
        </Grid>
        <Grid item xs={3}>
          <Order />
        </Grid>
      </Grid>
      {
        !products.length && !loading && !errorMes && (
          <Typography variant='h5' className={'emptyBasket'}>
            Корзина пуста
          </Typography>
        )
      }
      {
        errorMes && (
          <Box width={'100%'}>
            <Alert severity='error'>{errorMes}</Alert>
          </Box>
        )
      }
    </div>
  );
}

export default App;