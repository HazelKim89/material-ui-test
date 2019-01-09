import React from 'react'
import {Button} from 'react-materialize'
import sketch from './images/main1.jpg'
class Test extends React.Component{
  render(){
    return(
      <Button onClick={this.getScroll} className="test">getValue</Button>
    )
  }
}
class Scrolla extends React.Component{
  render(){
    return(
     <div className="scroll"> 
      <img src={sketch} id="imgTest" alt="temp" ></img>
     </div> 
    )
  }
  componentDidMount(){
    var temp = document.getElementById("imgTest")
    console.log(temp)
    var value = 0
    window.addEventListener('scroll', function(){
      value = window.scrollY
      console.log(value)
      temp.setAttribute('style','transform: translateX(-'+(value*3)+'px')
    })
    // temp.setAttribute('style','transform: translateX(-'+value+'px')
  }
}
const TestCompo = {Test, Scrolla}

export default TestCompo