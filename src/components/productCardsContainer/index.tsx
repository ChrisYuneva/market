import { Grid } from '@mui/material';
import ProductCard from '../productCard';
import { getProductsList } from '../../api/products';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';

function ProductCardsContainer() {
    const dispatch = useAppDispatch();
    const { loading, products, errorMes } = useAppSelector((state) => state.products);

    useEffect(() => {
      getProductsList(dispatch);
    }, [dispatch]);

  return (
    <>
        {
            products.map((item) => (
                <Grid item xs={4} key={item.id}>
                    <ProductCard 
                        imgSrc={item.image}
                        name={item.title}
                        description={item.description}
                        price={item.price}   
                    />
                </Grid>
            ))
        }
    </>
  );
}

export default ProductCardsContainer;
