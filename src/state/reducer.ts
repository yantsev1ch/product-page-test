import {IProduct} from "../models/IProduct";

enum ActionTypeEnum {
    FETCH_PRODUCT = 'FETCH_PRODUCT'
}

export const initialState: IProduct[] = []

type InitStateType = typeof initialState;

type ActionType = ReturnType<typeof fetchProducts>

export const productReducer = (state = initialState, action: ActionType): InitStateType => {
    switch (action.type) {
        case ActionTypeEnum.FETCH_PRODUCT:
            return action.products.map(pr => ({...pr}))
        default:
            return state;
    }
}

export const fetchProducts = (products: IProduct[]) => ({
    type: ActionTypeEnum.FETCH_PRODUCT,
    products
} as const);