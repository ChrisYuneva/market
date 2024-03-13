import { AppDispatch } from "../../store";
import { productsSlice } from "../../store/products/productsSlice";

export interface Rating {
    rate: number,
    count: number
}

export interface Product {
    id: number, 
    title: string, 
    price: number,
    category: string,
    description: string,
    image: string,
    rating: Rating, 
}

const { loading, getProducts, errorMes } = productsSlice.actions;

export async function getProductsList(dispatch: AppDispatch) {
    dispatch(loading(true));
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        dispatch(getProducts(data.map((item: Product) => {
            return {
                ...item, 
                count: Math.floor(Math.random() * (5 - 1) + 1),
            }
        })));
    }
    catch {
        dispatch(errorMes('Упс! Ошибка :('));
    }
}