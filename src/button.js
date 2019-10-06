import React, {Component} from 'react'
import './button.css'

class Button extends Component {

  state = 
  {       
    value:'X',
    haswon:false,
    winner:''
  }  


handleClick = (e) => {
    
 if(this.state.value==='X')
   { 
     
    
     e.target.value = this.state.value;
     e.target.disabled = true;
     this.checkWinner(e);
     this.setState
          ({
               value:'O'
          })   

    }
  else
  {
    
    e.target.value = this.state.value;
    e.target.disabled = true;
    this.checkWinner(e);
    this.setState
        ({
            value:'X'
        })
  }   

} 

checkWinner = (e) => {
 if  (
     ( (document.getElementById('1').value === document.getElementById('2').value) && (document.getElementById('1').value === document.getElementById('3').value) && (document.getElementById('1').value===e.target.value) ) || 
     ( (document.getElementById('4').value === document.getElementById('5').value) && (document.getElementById('4').value === document.getElementById('6').value) && (document.getElementById('4').value===e.target.value) ) ||
     ( (document.getElementById('7').value === document.getElementById('8').value) && (document.getElementById('7').value === document.getElementById('9').value) && (document.getElementById('7').value===e.target.value) ) ||
     ( (document.getElementById('1').value === document.getElementById('4').value) && (document.getElementById('1').value === document.getElementById('7').value) && (document.getElementById('1').value===e.target.value) ) || 
     ( (document.getElementById('2').value === document.getElementById('5').value) && (document.getElementById('2').value === document.getElementById('8').value) && (document.getElementById('2').value===e.target.value) ) || 
     ( (document.getElementById('3').value === document.getElementById('6').value) && (document.getElementById('3').value === document.getElementById('9').value) && (document.getElementById('3').value===e.target.value) ) || 
     ( (document.getElementById('1').value === document.getElementById('5').value) && (document.getElementById('1').value === document.getElementById('9').value) && (document.getElementById('1').value===e.target.value) ) || 
     ( (document.getElementById('3').value === document.getElementById('5').value) && (document.getElementById('3').value === document.getElementById('7').value) && (document.getElementById('3').value===e.target.value) )  
     ) 
     //first two comparisons are to make sure all the row/column/diagonal values for the winning combinations are the same. All the blocks initially have the same value (nothing/null) and hence 
     //checkwinner will always return true since all the values are the same. Hence making sure that block value is equal to e.target.value for atleast one of the blocks in each row/column/diagonal win condition ensures this doesnt happen 
      {
       console.log('winner is '+ e.target.value);
       
       this.setState
       ({
         winner:e.target.value,
         haswon:true
       })
       console.log(this.state.winner);

       //disabling the remaining buttons once a winner is decided
       var allInputs = document.getElementsByTagName("input"); 
       for(var i=0 ; i<allInputs.length ; i++)
          allInputs[i].setAttribute('disabled',true);

      }

}





render(){
    return(
        <div>
          <table id ="grid" align = "center">
            <tr>
              <td><input type = "button" onClick = {this.handleClick} id = "1"></input></td>
              <td><input type = "button" onClick = {this.handleClick} id = "2"></input></td>
              <td><input type = "button" onClick = {this.handleClick} id = "3"></input></td>
            </tr>
            <tr>
              <td><input type = "button" onClick = {this.handleClick} id = "4"></input></td>
              <td><input type = "button" onClick = {this.handleClick} id = "5"></input></td>
              <td><input type = "button" onClick = {this.handleClick} id = "6"></input></td>
            </tr>
            <tr>
              <td><input type = "button" onClick = {this.handleClick} id = "7"></input></td>
              <td><input type = "button" onClick = {this.handleClick} id = "8"></input></td>
              <td><input type = "button" onClick = {this.handleClick} id = "9"></input></td>
            </tr>         
          </table>

          <div align = "center">
           <h1>Player {this.state.value}'s turn</h1>
          </div>

          <div align = "center">
           <h1>Winner is {this.state.winner}</h1>
          </div>

        </div>
        

    )
}


} 

export default Button