
export default class ProductService {
    static async getProduct() {
        return await fetch(`/data.json`)
    }
}