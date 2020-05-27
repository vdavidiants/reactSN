import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_wrapper}>
                <div className={styles.header__logo}>SN</div>
            </div>
        </header>
    )
}

export default Header;