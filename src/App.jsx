import React, {Component} from 'react';
import Product from './Product';
import Productdes from './Productdes';
class App extends Component{
    state={
        page: 'home'
    }
    click = (pageName) =>{
        this.setState({page: pageName})
    }
    render(){
        return <div>
            <button onClick={()=>this.click('home')}>Home</button>
            <button onClick={()=>this.click('about')}>About</button>
            {this.state.page === 'home' ? <Product/> :<Productdes/>}
            
        </div>
    }
}
export default App;
