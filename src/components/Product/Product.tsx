import React from 'react';
import styles from './Product.module.css';

const Product = () => {
    return (
        <div className={styles.container}>
            <div className={styles.product}>
                <span className={styles.shop}>
                    Wildberries
                </span>
                <h1 className={styles.header}>Электробритва</h1>
                <div className={styles.about_product}>
                    <span className={styles.price}>3 567 $</span>
                    <span className={styles.line}/>
                    <span className={styles.rate}>Rate</span>
                    <span className={styles.line}/>
                    <span className={styles.review}>521 отзыв</span>
                    <span className={styles.line}/>
                    <span className={styles.update}>Обновлено 12 Ноября</span>
                </div>
                <span className={styles.line}/>
                <div className={styles.about_seller}>
                    <span>Артикул</span>
                    <span className={styles.line}/>
                    <span>Бренд</span>
                    <span className={styles.line}/>
                    <span>Продавец</span>
                    <span className={styles.line}/>
                    <span>Склад</span>
                </div>
                <span className={styles.line}/>
            </div>
        </div>
    );
};

export default Product;