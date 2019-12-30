import React, {Component} from 'react'
import './button.css'

class Button extends Component {

  
  state = 
  {       
    value:'X',
    haswon:false,
    winner:'',
    display:'block',
    count:1,
    undoAvailable:false,
    latestClick:[]
  }  
 
handleClick = async(e) =>  {
        let temp,tempid; 
        temp = this.state.count;
        tempid = e.target.id; 
        e.target.value = this.state.value;
        e.target.disabled = true;
        await this.checkWinner(e);
        await this.checkDraw();
        await this.swapState();
        await this.setState({
           count:temp+1,
           latestClick:tempid,
           undoAvailable:true        
        })
            
  }
      
    

swapState = () => {

      if(this.state.value==='X')
          this.setState({
            value:'O',
          })
      else
          this.setState({
            value:'X'
          })    
  
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
                    
                    this.setState({
                      winner:e.target.value,
                      haswon:true
                    })
                    console.log(this.state.winner);

                    //disabling the remaining buttons once a winner is decided
                    var allInputs = document.getElementsByTagName("input"); 
                    for(var i=0 ; i<allInputs.length ; i++)
                      {
                        allInputs[i].setAttribute('disabled',true);
                      }
                      
                    this.showWinner();  
            }
}

showWinner(){
    var x = document.getElementById('winner');    
    x.style.display = this.state.display;    
    console.log(x.style.display)
    console.log('won')  
}

checkDraw(){
  
  if((this.state.count===9)&&(this.state.haswon===false))
     {
      var x = document.getElementById('draw');    
      x.style.display = this.state.display;    
      console.log(x.style.display);
      console.log('draw'); 
     }
  
}

undo = async() => {
  if(this.state.count===1)
        {
          alert('Cannot undo on the first turn!')
        }
  
  else if(this.state.haswon===true)
        {
          alert('Cannot undo after winnning!')
        }
  else if(this.state.count===10)
        {
          alert('Cannot undo the final move!')
        }

  else   {
            if(this.state.undoAvailable===false)
                    {
                      alert('You can only undo your own move!')
                    }
            else {   
                      let x = this.state.latestClick;
                      document.getElementById(x).disabled = false;
                      document.getElementById(x).value = '';
                      this.swapState();
                      let temp = this.state.count;
                      this.setState({
                      count:temp-1,
                      undoAvailable:false
                      })
                  }
                   
         
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

          <div align = "center" id = "winner">
          <h1>Player {this.state.winner} won!</h1>
          </div>

          <div align = "center" id = "draw">
          <h1>It's a draw!</h1>
          </div>

          <div  align = "center">
            <button onClick = {this.undo}>Undo</button>
          </div>

        </div>
        

    )
}


} 

export default Button