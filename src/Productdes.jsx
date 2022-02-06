import React, {Component} from 'react';


class Productdes extends Component{
    state={
        counter: 0
    }
    componentDidMount(){
        console.log('Did Mount For ProductDEs');
       
    }
    componentWillUnmount(){
        console.log('Will  UnMount For ProductDES');
    }
    componentDidUpdate(){
        console.log('Did update For ProductDEs');
    }
    counterClicker=()=>{
        this.setState({counter: this.state.counter+1})
    }
    render(){
       return <>
       <h2>Hi, I am a Product Description Page!</h2>
        <button onClick={this.counterClicker}>Click Me !</button>
       <h2>Counter : {this.state.counter}</h2>
       <h2>Hi I am product {this.props.name}</h2>
       </>
    }
}
export default Productdes;