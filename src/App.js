import React,{Component} from 'react';

import './App.css';

class App extends Component{

  state= {
    count:'0'

  }

  //Handeling each number
  // eslint-disable-line no-extend-native
  handle=(digit)=>{
    
    const {count}=this.state
    this.setState({
      count:count==='0'? String(digit) : count+digit
    });
  }

//Adding DOT
  addDot=()=>{
   
    const {count}=this.state
    if(count.indexOf('.')===-1){
      this.setState({
        count: count+'.'
      });
    }
  }

  //Resetting
reset=()=>{

  const {count}=this.state
  this.setState({
    count:'0'
  });
}

//Making Calculations
calculate=()=>{
  const {count}=this.state
  this.setState({
   
    count:eval(count)
  });
}


  render(){
    return (
      <div className="App">

       <h2>BOSHES' CALCULATOR</h2>
       
       <input value={this.state.count} />
         <div>       
            <button className="myButton" onClick={() =>this.handle(7)}>7</button>
            <button  className="myButton" onClick={() =>this.handle(8)}>8</button>
            <button  className="myButton" onClick={() =>this.handle(9)}>9</button>       
            <button  className="myButton" onClick={() =>this.handle('/')}>/</button> 
         </div>
         
        <div>
            <button  className="myButton" onClick={() =>this.handle(4)}>4</button>
            <button  className="myButton" onClick={() =>this.handle(5)}>5</button>
            <button  className="myButton" onClick={() =>this.handle(6)}>6</button>
            <button  className="myButton" onClick={() =>this.handle('*')}>*</button>
        </div>
         
        <div>
            <button  className="myButton" onClick={() =>this.handle(1)}>1</button>
            <button  className="myButton" onClick={() =>this.handle(2)}>2</button>
            <button  className="myButton" onClick={() =>this.handle(3)}>3</button>
            <button  className="myButton" onClick={() =>this.handle('-')}>-</button>          
        </div>
           
       <div >
            <button  className="myButton" onClick={() =>this.addDot()}>.</button>
            <button  className="myButton" onClick={() =>this.handle(0)}>0</button>
            <button  className="myButton" onClick={() =>this.reset()}>C</button> 
          
            <button  className="myButton" onClick={() =>this.handle('+')}>+</button>
       </div>
    
      <div >
       
      <button  className="myButton" onClick={() =>this.calculate()}>=</button>
     
       </div>     
 
    </div>
    );

  }
  
}



export default App;





  