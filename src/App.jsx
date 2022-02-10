import React, {Component} from 'react';
import Product from './Product';
import Productdes from './Productdes';
class App extends Component{
    /*state={
        page: 'Product',
     
    }
   /* click (pageName){
        this.setState({page: pageName});
    }
*/
      /*  set=(pageName)=>{
            this.setState({page: pageName})
        }*/
    render(){
        return <div>     
           { /*{this.state.page === 'Product' ? <Product/>:<Productdes/>}
           <Productdes backClick={this.click}/>
           Question: Does it again render from this line 
           if i change the state property
           */}
           <Product/>     
        </div>
    }
}
export default App;
