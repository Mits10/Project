/*import React, {Component} from 'react';*/
import React, {useState} from 'react';
import Product from './Product';


/*class Productdes extends Component{
    state={
       page: 'Productdes'
    }
    componentDidMount(){
        console.log('Did Mount For ProductDEs');
        setTimeout(() => {
            alert('Hello');
        }, 1000);
       
    }
    componentWillUnmount(){
        console.log('Will  UnMount For ProductDES');
        
    }
    componentDidUpdate(){
        console.log('Did update For ProductDEs');
    }
   /* set=()=>{
        this.props.backChild(this.state.set);
    }*/
    /*set=(pageName)=>{
        this.props.condition(null)
    }
    render(){
       return <>
       <h2>Hi, I am a Product Description Page!</h2>
       <h2>Hi I am product {this.props.description}</h2>
       <h2>Hi I am product desc {this.props.category}</h2>
       <button onClick={()=>this.set(null)}>Back</button>
       {/*{this.state.page === 'Product' ? <Product/> : <Productdes/>}
       */
       /*
       <Product/> 
       IF i do this it is still mounting the product class first ? 
       Hiearchy ? 
       */
      /* </>
    }
}
export default Productdes;*/
const Productdes=({selectedProduct,click})=>{

    return <>
       <h2>Description: {selectedProduct.description}</h2>
       <h2>Category {selectedProduct.category}</h2>
       <button onClick={()=>click(null)}>Back</button>
    </>
}
export default Productdes;