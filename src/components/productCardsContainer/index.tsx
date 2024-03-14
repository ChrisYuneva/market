import { Grid } from '@mui/material';
import ProductCard from '../productCard';
import { getProductsList } from '../../api/products';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';

function ProductCardsContainer() {
    const dispatch = useAppDispatch();
    const { products } = useAppSelector(state => state.products);

    useEffect(() => {
      getProductsList(dispatch);
    }, [dispatch]);

  return (
    <>
        {
            products.map((item) => (
                <Grid item xs={12} sm={6} md={6} lg={4} key={item.id}>
                    <ProductCard 
                        id={item.id}
                        imgSrc={item.image}
                        name={item.title}
                        description={item.description}
                        price={item.price}   
                        count={item.count}
                    />
                </Grid>
            ))
        }   
    </>
  );
}

export default ProductCardsContainer;