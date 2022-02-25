import React, {useEffect, useReducer, useState} from 'react';
import styles from './ProductById/ProductById.module.css';
import ProductService from "../../api/ProductService";
import {fetchProducts, initialState, productReducer} from "../../state/reducer";
import ProductById from "./ProductById/ProductById";
import OrderInfo from "../OrderInfo/OrderInfo";
import {useParams} from "react-router-dom";
import {IProduct} from "../../models/IProduct";

const Products = () => {

    const params = useParams()
    const [state, dispatch] = useReducer(productReducer, initialState)
    const [rubles, setRubles] = useState('')
    const [amount, setAmount] = useState('')
    const listInfo = [
        {
            id: "1",
            header: "Заказы",
            leftColumnOne: "За 7 дней",
            leftColumnTwo: "За 30 дней",
            leftColumnThree: "12 ноя - 30 дек"
        },
        {
            id: "2",
            header: "В среднем заказов",
            leftColumnOne: "В сутки",
            leftColumnTwo: "В день, когда в наличии"
        },
        {
            id: "3",
            header: "Возможности",
            leftColumnOne: "Упущенные заказы",
            leftColumnTwo: "Потенциал"
        },
        {
            id: "4",
            header: "Остатки",
            leftColumnOne: "В наличии",
            leftColumnTwo: "С продажами"
        }
    ]

    useEffect(() => {
        async function fetchProduct() {
            let response = await ProductService.getProduct();
            let products = await response.json();
            let result = products.filter((p: IProduct) => p.id === params.id)
            dispatch(fetchProducts(result))
            setAmount(result[0].amount)
            setRubles(result[0].rubles)
        }

        fetchProduct()
    }, [params.id])

    return (
        <div>
            {state.map(p => <ProductById key={p.id} product={p}/>)}
            <div className={styles.lists}>
                {listInfo.map(l => <OrderInfo key={l.id} header={l.header}
                                              leftColumnOne={l.leftColumnOne}
                                              leftColumnTwo={l.leftColumnTwo}
                                              leftColumnThree={l.leftColumnThree}
                                              rubles={rubles}
                                              amount={amount}
                />)}
            </div>
        </div>
    );
};

export default Products;