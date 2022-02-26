import React, {FC} from 'react';
import styles from './Rating.module.css';

type PropsType = {
    rating: number
}

const Rating: FC<PropsType> = ({rating}) => {

    let activeWith = rating / 0.05;

    return (
        <div className={styles.rating}>
            <div className={styles.rating_body}>
                <div className={styles.rating_active}
                     style={{width: activeWith + "%"}}/>
                <div className={styles.rating_items}>
                    <input type="radio" className={styles.rating_item} value={1}
                           name="rating"/>
                    <input type="radio" className={styles.rating_item} value={2}
                           name="rating"/>
                    <input type="radio" className={styles.rating_item} value={3}
                           name="rating"/>
                    <input type="radio" className={styles.rating_item} value={4}
                           name="rating"/>
                    <input type="radio" className={styles.rating_item} value={5}
                           name="rating"/>
                </div>
            </div>
            <div className={styles.rating_value}>{rating}</div>
        </div>
    )
};

export default Rating;