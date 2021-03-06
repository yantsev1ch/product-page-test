import React, {FC, useState} from 'react';
import styles from './OrderInfo.module.css';
import ReactTooltip from "react-tooltip";
import tooltipLogo from '../../assets/tooltip.svg';

type PropsType = {
    header: string
    leftColumnOne: string
    leftColumnTwo: string
    leftColumnThree?: string
    rubles: string
    amount: string
    tooltip?: {
        tooltipOne: string
        tooltipTwo: string
    }
}

type FilterType = 'amount' | 'rubles'

const OrderInfo: FC<PropsType> = ({
                                      header,
                                      leftColumnOne,
                                      leftColumnTwo,
                                      leftColumnThree,
                                      rubles,
                                      amount,
                                      tooltip
                                  }) => {
    const [filter, setFilter] = useState<FilterType>('rubles')

    const onAmountHandleClick = () => setFilter("amount")
    const onRublesHandleClick = () => setFilter("rubles")

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.left_section}>
                    <div className={styles.orders}>{header}</div>
                    <div className={styles.date_for}>
                        {leftColumnOne}
                        {tooltip ?
                            <img src={tooltipLogo} data-tip={tooltip.tooltipOne}
                                 className={styles.logo}/> : ''
                        }
                        <ReactTooltip/>
                    </div>
                    <div className={styles.date_for}>
                        {leftColumnTwo}
                        {tooltip ?
                            <img src={tooltipLogo} data-tip={tooltip.tooltipTwo}
                                 className={styles.logo}/> : ''
                        }
                        <ReactTooltip/>
                    </div>
                    <div className={styles.date_period}>{leftColumnThree}</div>
                </div>
                <div className={styles.right_section}>
                    <div className={styles.buttons}>
                        <button onClick={onAmountHandleClick}
                                className={filter === 'amount' ? styles.active : styles.btn}
                                id={'1'}>????
                        </button>
                        <button onClick={onRublesHandleClick}
                                className={filter === 'rubles' ? styles.active : styles.btn}>??????
                        </button>
                    </div>
                    <div
                        className={styles.amount}>{filter === 'rubles' ? rubles : amount}</div>
                    <div
                        className={styles.amount}>{filter === 'rubles' ? rubles : amount}</div>
                    <div
                        className={styles.amount}>{leftColumnThree ? filter === 'rubles' ? rubles : amount : ''}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderInfo;