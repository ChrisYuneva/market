import { Product } from "../../../api/products/types";

export interface BasketProduct extends Product {
    count: number
}

export interface ProductsInitialState {
    loading: boolean,
    products: BasketProduct[],
    total: number,
    errorMes: string | null,
}