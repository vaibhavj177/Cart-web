import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [
            {
                title: "Watch",
                price: 99,
                qty: 6,
                img: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80',
                id: 1
            },
            {
                title: "Mobile Phone",
                price: 999,
                qty: 14,
                img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                id: 2
            },
            {
                title: "Laptop",
                price: 9999,
                qty: 10,
                img: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1251&q=80',
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

getCount = () => {
  const {products} = this.state;
  var count = 0;
  products.forEach((product) => {
    count += product.qty;
  });
  return count;
}

getTotal = () => {
  const {products} = this.state;
  var total = 0;
  products.map((product) => {
    total += product.qty * product.price;
  });
  return total;
}
  
  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <NavBar
          count={this.getCount()}
        />
        <Cart
          products = {products}
          OnclickIncrease = {this.HandleIncreaseQuantity}
          OnclickDecrease = {this.HandleDecreaseQuantity}
          OnDeleteQuantity = {this.HandleDeleteQuantity}
        />
        <div style = {{padding: 10, fontSize: 20}}>
          TOTAL: {this.getTotal()}
        </div>
      </div>
    );
  }
  
}

export default App;
