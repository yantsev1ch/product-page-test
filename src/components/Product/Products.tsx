import React, {useEffect, useState} from 'react';
import styles from './ProductById/ProductById.module.css';
import ProductService from "../../api/ProductService";
import ProductById from "./ProductById/ProductById";
import OrderInfo from "../OrderInfo/OrderInfo";
import {useParams} from "react-router-dom";
import {IProduct} from "../../models/IProduct";
import {listInfo} from "../OrderInfo/Section";

const Products = () => {

    const params = useParams()
    const [product, setProduct] = useState<IProduct>({
        amount: "",
        brand: "",
        id: "",
        name: "",
        price: "",
        rating: 0,
        reviews: "",
        rubles: "",
        seller: "",
        warehouse: ""
    })

    useEffect(() => {
        async function fetchProduct() {
            let result = await ProductService.getProduct(params.id);
            setProduct(result)
        }

        fetchProduct()
    }, [params.id])

    return (
        <div>
            <ProductById product={product}/>
            <div className={styles.lists}>
                {listInfo.map(l => <OrderInfo key={l.id} header={l.header}
                                              leftColumnOne={l.leftColumnOne}
                                              leftColumnTwo={l.leftColumnTwo}
                                              leftColumnThree={l.leftColumnThree}
                                              rubles={product.rubles}
                                              amount={product.amount}
                                              tooltip={l.tooltip}
                />)}
            </div>
        </div>
    );
};

export default Products;