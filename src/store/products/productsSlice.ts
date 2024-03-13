import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../api/products";

interface BasketProduct extends Product {
    count: number
}

interface ProductsInitialState {
    loading: boolean,
    products: BasketProduct[],
    total: number,
    errorMes: string | null,
}

const initialState: ProductsInitialState = {
    loading: false,
    products: [],
    total: 0,
    errorMes: null,
} 

export const productsSlice = createSlice({
    name: 'products', 
    initialState,
    reducers: {
        loading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        getProducts(state, action: PayloadAction<BasketProduct[]>) {
            state.products = action.payload;
            state.total = action.payload.reduce((total, product) => {
                total += product.price*product.count;

                return total;
            }, 0);
            state.loading = false;
        },
        plusProduct(state, action: PayloadAction<number>) {
            state.products = state.products.map((product) => {
                if(product.id === action.payload) {
                    product.count += 1;
                }

                return product;
            });
            const total = state.products.find((product) => product.id === action.payload);

            if(total) {
                state.total += total.price;
            }
        },
        minusProduct(state, action: PayloadAction<number>) {
            state.products = state.products.map((product) => {
                if(product.id === action.payload) {
                    product.count -= 1;
                }

                return product;
            });
            const total = state.products.find((product) => product.id === action.payload);

            if(total) {
                state.total -= total.price;
            }
        },
        deleteProduct(state, action: PayloadAction<number>) {
            const total = state.products.find((product) => product.id === action.payload);
            state.products = state.products.filter((product) => product.id !== action.payload);
            if(total) {
                state.total -= total.price*total.count;
            }
        },
        errorMes(state, action: PayloadAction<string>) {
            state.errorMes = action.payload;
            state.loading = false;
        }
    }
});

export default productsSlice.reducer;