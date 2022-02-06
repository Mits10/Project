import React, {Component} from 'react';
import Productdes from './Productdes';

class Product extends Component{
    state={
        name : 'Arnab',
        location: 'Bangladesh',
        products: [
            {
            id: 1,
            name: 'Product Name',
            description: 'Product Description',
            price: 'price',
            category: 'Product Category',
            },
            {
            id: 2,
            name: 'Product Name',
            description: 'Product Description',
            price: 'price',
            category: 'Product Category',
            },
            {
            id: 3,
            name: 'Product Name',
            description: 'Product Description',
            price: 'price',
            category: 'Product Category',
            }
        ]
    }
    componentDidMount(){
        console.log('Did Mount For home');
    }
    componentWillUnmount(){
        console.log('Will  UnMount For home');
    }
    render(){
        
       return <> <h2>Hi, I am a Product Page</h2>
       <Productdes name={this.state.name}/>
       {  this.state.products.map(product => (
           <li key={product.id}>
           <h2> Name: {product.name}</h2>
           <h2> Name: {product.price}</h2>
           <button onClick>Show Details</button>
           </li>
           
       ))}
       </>
    }
}
export default Product;