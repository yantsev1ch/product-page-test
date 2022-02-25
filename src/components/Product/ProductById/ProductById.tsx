import React, {FC} from 'react';
import styles from "./ProductById.module.css";
import {IProduct} from "../../../models/IProduct";

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
                    <span className={styles.rate}>{product.rating}</span>
                    <span className={styles.line}/>
                    <span className={styles.review}>{product.reviews} отзыв</span>
                    <span className={styles.line}/>
                    <span className={styles.update}>Обновлено 12 Ноября</span>
                </div>
                <span className={styles.line}/>
                <div className={styles.about_seller}>
                    <span className={styles.sections}>Артикул {product.id}</span>
                    <span className={styles.line}/>
                    <span className={styles.sections}>Бренд {product.brand}</span>
                    <span className={styles.line}/>
                    <span className={styles.sections}>Продавец {product.seller}</span>
                    <span className={styles.line}/>
                    <span className={styles.sections}>Склад {product.warehouse}</span>
                </div>
                <span className={styles.line}/>
            </div>
        </div>
    );
};

export default ProductById;