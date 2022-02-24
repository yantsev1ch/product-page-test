import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import {NavLink} from 'react-router-dom';

const Header = () => {

    const activeClass = ({isActive}: { isActive: boolean }) => isActive ? `${styles.active}` : '';

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" className={styles.logo}/>
                </div>
                <div className={styles.links}>
                    <NavLink to="/product/10066990"
                             className={activeClass}>Товар<br/>10066990</NavLink>
                    <NavLink to="/product/10066991"
                             className={activeClass}>Товар<br/>10066991</NavLink>
                    <NavLink to="/product/10066992"
                             className={activeClass}>Товар<br/>10066992</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;