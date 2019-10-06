import React,{Component} from 'react';
import Button from './button.js'

import './App.css';


class App extends Component {

 reset = (e) => {
   window.location.reload(); 
 }  
 

  
  render()
   {
      return (
                <div className="App">
                      <h1 align  ="center">Test</h1>   
                      <Button/>
                      <div align = "center">
                         <button onClick = {this.reset}>Reset</button>
                      </div>   
                         
                </div>
             );
   }
}

export default App;
