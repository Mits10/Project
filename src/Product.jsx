//import React, {Component} from 'react';
import React, {useState,useEffect} from 'react';
import Productdes from './Productdes';
import './Product.css'

const Product =()=>{
    const [selectedProduct, setSelectedProduct]= useState(null);
    const [products, setProduct]=useState([
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
    ]);
    useEffect(()=>{
        console.log('Did mount in UseEffect')
        return () =>{
            console.log('Will unmount in useEffect')
        }
    },[])
    const click=(product)=>{
        setSelectedProduct(product);
    }
    return <>
    {selectedProduct === null ?
        <div className ='product'>
          
          {products.map(product => (
         <ul key={product.id}>
         <li> Name: {product.name}</li>
         <li> Price: {product.price}</li>
         <button onClick={()=>click(product)}>Show Details</button>
         </ul>
         
          ))}
          </div>
          :<Productdes selectedProduct={selectedProduct} click={click}/>}
    </>
}
export default Product;