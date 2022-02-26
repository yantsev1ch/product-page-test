import {IProduct} from "../models/IProduct";

export default class ProductService {
    static async getProduct(id?: string) {
        const response = await fetch(`/data.json`);
        const data = await response.json();
        let result = data.find((p: IProduct) => p.id === id);
        return result;
    }
}