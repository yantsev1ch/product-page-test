import React, {FC} from 'react';
import styles from "./ProductById.module.css";
import {IProduct} from "../../../models/IProduct";
import Rating from "../../Rating/Rating";

type PropsType = {
    product: IProduct;
}

const ProductById: FC<PropsType> = ({product}) => {
    return (
        <div className={styles.container}>
            <div className={styles.product}>
                <span className={styles.shop}>
                    Wildberries
                </span>
                <h1 className={styles.header}>{product.name}</h1>
                <div className={styles.about_product}>
                    <span className={styles.price}>{product.price}</span>
                    <span className={styles.line}/>
                    <span className={styles.rate}>
                        <Rating rating={product.rating}/>
                    </span>
                    <span className={styles.line}/>
                    <span className={styles.review}>{product.reviews} отзыв</span>
                    <span className={styles.line}/>
                    <span className={styles.update}>Обновлено 12 Ноя, 12:24</span>
                </div>
                <span className={styles.line}/>
                <div className={styles.about_seller}>
                    <div className={styles.sections}>
                        <span>Артикул</span>
                        <span className={styles.value}>{product.id}</span>
                    </div>
                    <span className={styles.line}/>
                    <div className={styles.sections}>
                        <span>Бренд</span>
                        <span className={styles.value}>{product.brand}</span>
                    </div>
                    <span className={styles.line}/>
                    <div className={styles.sections}>
                        <span>Продавец</span>
                        <span className={styles.value}>{product.seller}</span>
                    </div>
                    <span className={styles.line}/>
                    <div className={styles.sections}>
                        <span>Склад</span>
                        <span className={styles.value}>{product.warehouse}</span>
                    </div>
                </div>
                <span className={styles.line}/>
            </div>
        </div>
    );
};

export default ProductById;