import React , { Component } from 'react';
import "./Buttons.css";

class Clicker extends Component {
constructor(props){
    super(props);
    this.state = {num : 0}
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
}

increment(){

   let increase =  this.state.num + 1
   this.setState({num : increase})
}

decrement(){
    let decremented = this.state.num - 1
    this.setState({num : decremented})
}

    render(){
       return (
       <div className='board'>

       <h1 className="number">{this.state.num}</h1>
       <div className="buttons">
       <button className ={"neon-orange"} onClick = {this.increment}>+</button>
       <button className = {"neon-blue"}  onClick = {this.decrement}>-</button>
       </div>
       </div>
       )
    }
}


export default Clicker;
