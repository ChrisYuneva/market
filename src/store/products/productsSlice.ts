import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../api/products";

interface ProductsInitialState {
    loading: boolean,
    products: Product[],
    errorMes: string | null,
}

const initialState: ProductsInitialState = {
    loading: false,
    products: [],
    errorMes: null,
} 

export const productsSlice = createSlice({
    name: 'products', 
    initialState,
    reducers: {
        loading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        getProducts(state, action: PayloadAction<Product[]>) {
            state.products = action.payload;
            state.loading = false;
        },
        errorMes(state, action: PayloadAction<string>) {
            state.errorMes = action.payload;
            state.loading = false;
        }
    }
});

export default productsSlice.reducer;