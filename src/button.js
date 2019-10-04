import React, {Component} from 'react'


class Button extends Component {

  state = 
  {
    
    value:'x'
  }  


handleClick = (e) => {
    
 if(this.state.value==='x')
   { 
     
    
     e.target.value = this.state.value;
     e.target.disabled = true;
     this.setState
          ({
               value:'o'
          })   

    }
  else
  {
    
    e.target.value = this.state.value;
    e.target.disabled = true;
    this.setState
        ({
            value:'x'
        })
  }   

} 





render(){
    return(
        <div>
          <table>
            <tr>
              <td><input type = "button" onClick = {this.handleClick} ></input></td>
              <td><input type = "button" onClick = {this.handleClick} ></input></td>
              <td><input type = "button" onClick = {this.handleClick} ></input></td>
            </tr>
            <tr>
              <td><input type = "button" onClick = {this.handleClick} ></input></td>
              <td><input type = "button" onClick = {this.handleClick} ></input></td>
              <td><input type = "button" onClick = {this.handleClick} ></input></td>
            </tr>
            <tr>
              <td><input type = "button" onClick = {this.handleClick} ></input></td>
              <td><input type = "button" onClick = {this.handleClick} ></input></td>
              <td><input type = "button" onClick = {this.handleClick} ></input></td>
            </tr>
           
            
          </table>
        </div>
        

    )
}


} 

export default Button