import React, {Component} from 'react';
import Productdes from './Productdes';
import './Product.css'
class Product extends Component{
    state={
        selectedProduct: null,
        page: 'Product',
        products: [
            {
            id: 1,
            name: 'Product Name 1',
            description: 'Product Description 1',
            price: 'price 1',
            category: 'Product Category 1',
            },
            {
            id: 2,
            name: 'Product Name 2 ',
            description: 'Product Description 2',
            price: 'price 2',
            category: 'Product Category 2',
            },
            {
            id: 3,
            name: 'Product Name 3',
            description: 'Product Description 3',
            price: 'price 3',
            category: 'Product Category 3',
            }
        ]
    }
    componentDidMount(){
        console.log('Did Mount For product');
        setTimeout(() => {
            alert('Hello');
        }, 3000);
    }
    componentWillUnmount(){
        console.log('Will  UnMount For product');
    }
    click = (product) =>{
        this.setState({selectedProduct: product});
       
    }
   /* setPage (pageName){
        this.setState({page: pageName});
    } */
    render(){
        
       return <> 
      {this.state.selectedProduct === null ? 
      
        <div className ='product'>
          
            {this.state.products.map(product => (
           <ul key={product.id}>
           <li> Name: {product.name}</li>
           <li> Price: {product.price}</li>
           <button onClick={()=>this.click(product)}>Show Details</button>
           </ul>
           
            ))}
            </div>
       : <Productdes description={this.state.selectedProduct.description} category={this.state.selectedProduct.category} condition={this.click}/>
            }
       </>
    }
}
export default Product;