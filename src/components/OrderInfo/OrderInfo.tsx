import React from 'react';
import styles from './OrderInfo.module.css';

const OrderInfo = () => {

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.left_section}>
                    <div className={styles.orders}>Заказы</div>
                    <div className={styles.date_for}>За 7 дней</div>
                    <div className={styles.date_for}>За 30 дней</div>
                    <div className={styles.date_period}>12 ноя - 30 дек</div>
                </div>
                <div className={styles.right_section}>
                    <div className={styles.buttons}>
                        <button>Шт</button>
                        <button>Руб</button>
                    </div>
                    <div className={styles.amount}>12 340 211 Р</div>
                    <div className={styles.amount}>12 340 211 Р</div>
                    <div className={styles.amount}>12 340 211 Р</div>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.left_section}>
                    <div className={styles.orders}>В среднем заказов</div>
                    <div className={styles.date_for}>В сутки</div>
                    <div className={styles.date_for}>В день, когда в наличии</div>
                    <div/>
                </div>
                <div className={styles.right_section}>
                    <div className={styles.buttons}>
                        <button>Шт</button>
                        <button>Руб</button>
                    </div>
                    <div className={styles.amount}>12 340 211 Р</div>
                    <div className={styles.amount}>12 340 211 Р</div>
                    <div/>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.left_section}>
                    <div className={styles.orders}>Возможности</div>
                    <div className={styles.date_for}>Упущенные заказы</div>
                    <div className={styles.date_for}>Потенциал</div>
                    <div/>
                </div>
                <div className={styles.right_section}>
                    <div className={styles.buttons}>
                        <button>Шт</button>
                        <button>Руб</button>
                    </div>
                    <div className={styles.amount}>12 340 211 Р</div>
                    <div className={styles.amount}>12 340 211 Р</div>
                    <div/>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.left_section}>
                    <div className={styles.orders}>Остатки</div>
                    <div className={styles.date_for}>В наличии</div>
                    <div className={styles.date_for}>С продажами</div>
                    <div/>
                </div>
                <div className={styles.right_section}>
                    <div className={styles.buttons}>
                        <button>Шт</button>
                        <button>Руб</button>
                    </div>
                    <div className={styles.amount}>12 340 211 Р</div>
                    <div className={styles.amount}>12 340 211 Р</div>
                    <div/>
                </div>
            </div>
        </div>
    );
};

export default OrderInfo;