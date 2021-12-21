import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';
import * as firebase from 'firebase';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [],
        loading: true
    }
    this.db = firebase.firestore()
}

componentDidMount() {
  this.db
    .collection('products')
    // .where('price', '==', 999) 
    // .where('title', '==', 'Bag')
    // .orderBy('price')
    .onSnapshot((snapshot) => {
      console.log(snapshot);
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        console.log(data);
        return data;
      });
      this.setState({
        products,
        loading: false
      })
    })
}
HandleIncreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(() => {
        console.log("Product updated succesfully!");
      })
      .catch((err) => {
        console.log(`Error in updating the Product ${err}`);
      })
}

HandleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);

    const docRef = this.db.collection('products').doc(products[index].id);
    if(products[index].qty === 0) {
      return;
    }
    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(() => {
        console.log("Product updated succesfully!");
      })
      .catch((err) => {
        console.log(`Error in updating the Product ${err}`);
      })
    
}

HandleDeleteQuantity = (id) => {
    const {products} = this.state;
    // const items = products.filter((item) => id !== item.id);
    // this.setState({products: items});

    const docRef = this.db.collection('products').doc(id);
    docRef
      .delete()
      .then(() => {
        console.log("Product deleted succesfully!");
      })
      .catch((err) => {
        console.log(`Error in deleting the Product ${err}`);
      })
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

addProduct = () => {
  this.db
    .collection('products')
    .add({
      title: 'Washing Machine',
      qty: 10,
      price: 10000,
      img: ''
    })
    .then((docref) => {
      console.log("Product added Succesfully: ", docref);
    })
    .catch((err) => {
      console.log(`Error in adding product ${err}`);
    })
}
  
  render(){
    const {products, loading} = this.state;
    return (
      <div className="App">
        <NavBar
          count={this.getCount()}
        />
        {/* <button onClick={this.addProduct}>Add Product</button> */}
        {loading && <h1>Loading the Products....</h1> }
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
