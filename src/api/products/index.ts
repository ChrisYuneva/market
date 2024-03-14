import { AppDispatch } from '../../store';
import { productsSlice } from '../../store/products/productsSlice';
import { Product } from './types';

const { loading, getProducts, errorMes } = productsSlice.actions;

export async function getProductsList(dispatch: AppDispatch) {
  dispatch(loading(true));

  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    dispatch(
      getProducts(
        data.map((item: Product) => {
          return {
            ...item,
            count: 1,
          };
        })
      )
    );
  } catch {
    dispatch(
      errorMes(
        'Извините, произошла ошибка. Попробуйте посетить страницу позже.'
      )
    );
  }
}
