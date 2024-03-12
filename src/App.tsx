import { Grid } from '@mui/material';
import './App.css';
import ProductCardsContainer from './components/productCardsContainer';
import Order from './components/order';

function App() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={9} container spacing={2}>
        <ProductCardsContainer />
      </Grid>
      <Grid item xs={3}>
        <Order />
      </Grid>
    </Grid>
  );
}

export default App;
