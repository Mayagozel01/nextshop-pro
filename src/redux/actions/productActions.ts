import type { Product } from "../types";


export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ADD_PRODUCT =  'ADD_PRODUCT';
export const REMOVE_PRODUCT =  'REMOVE_PRODUCT';
// barde literal tip duzulen, yagny ts-de sheydip uytgeyja setir yazanymyzda


interface SetProductsAction {
    type: typeof SET_PRODUCTS;
    payload : Product[];
}

interface AddProductAction {
    type: typeof ADD_PRODUCT;
    payload: Product;
}

interface RemoveProductAction {
    type: typeof REMOVE_PRODUCT;
    payload: number;
}

export type ProductActionTypes = SetProductsAction | AddProductAction | RemoveProductAction;


export const setProducts = (products:Product[]):SetProductsAction=>({
   type: SET_PRODUCTS,
   payload: products, 
})


export const addProduct = (product:Product):AddProductAction=>({
    type: ADD_PRODUCT,
    payload: product,
})


export const removeProduct = (id:number):RemoveProductAction=>({
    type: REMOVE_PRODUCT,
    payload:id,
})