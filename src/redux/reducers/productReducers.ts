import type { Product } from "../types";
import { type ProductActionTypes, SET_PRODUCTS,  ADD_PRODUCT,  REMOVE_PRODUCT } from "../actions/productActions";


export type ProductState = {
    products : Product[];
}
// Здесь мы создаем псевдоним типа (type alias) с именем ProductState.
// Этот тип описывает структуру всего состояния для нашего редусера.
//  В данном случае, состояние — это объект, который обязательно должен 
// содержать свойство products, которое, в свою очередь, является массивом объектов Product (Product[]).



const initialState: ProductState ={
    products:[],
}

export default function productReducer(
    state=initialState,
    // state = initialState: Здесь мы используем значение по умолчанию для параметра state. 
    // Это стандартная практика в Redux: если функция вызывается без state (например, при первом запуске), будет использовано initialState.
    action: ProductActionTypes
):ProductState{
    switch (action.type){
        case  SET_PRODUCTS:
            console.log(action.payload)
            return {...state, products:action.payload};
        case ADD_PRODUCT:
        return { ...state, products: [...state.products, action.payload] };
         case REMOVE_PRODUCT:
        return { ...state, products: state.products.filter((p) => p.id !== action.payload) };
         default:
        return state;
    }
}