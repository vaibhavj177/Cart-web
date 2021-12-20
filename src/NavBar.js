import React from 'react';
const NavBar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons.flaticon.com/png/512/649/premium/649931.png?token=exp=1640005410~hmac=73e6a0a5eba74312d685f542a85897ab"/>
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    );
    
}

const styles ={
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9

    }
};

export default NavBar;