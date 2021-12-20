import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    title: "Watch",
                    price: 99,
                    qty: 6,
                    img: '',
                    id: 1
                },
                {
                    title: "Mobile Phone",
                    price: 999,
                    qty: 14,
                    img: '',
                    id: 2
                },
                {
                    title: "Laptop",
                    price: 9999,
                    qty: 10,
                    img: '',
                    id: 3
                },
            ]
        }
    }
    HandleIncreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);
        
        products[index].qty += 1;
        this.setState({
            products: products
        });
    }

    HandleDecreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty === 0){
            return;
        }
        products[index].qty -= 1;
        this.setState({
            products: products
        });
    }

    HandleDeleteQuantity = (id) => {
        const {products} = this.state;
        const items = products.filter((item) => id !== item.id);
        this.setState({products: items});
    }
    render() {
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem 
                            product={product}
                            key={product.id}
                            OnclickIncrease = {this.HandleIncreaseQuantity}
                            OnclickDecrease = {this.HandleDecreaseQuantity}
                            OnDeleteQuantity = {this.HandleDeleteQuantity}
                        />
                    )
                    
                })}
            </div>
        );
        
    }
}



export default Cart;