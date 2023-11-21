import React from 'react'
import { useState } from 'react'
import './App.css'


class App extends React.Component{
  constructor(){
    super()
    this.state={
      count : 0
    }
  }
  increase=()=>{
    this.setState({count : this.state.count +1})
    
  }
  decrease=()=>{
    if (this.state.count>0){
      this.setState({count : this.state.count -1})
    }
  }
  reset=()=>{
      this.setState({count:0})
  }
  render(){
    return (
      <>
      <div className='head'>Counter App</div>
      <div className='count'>{this.state.count}</div>
     <button onClick={this.increase} className='btn1'>+</button>
      <button onClick={this.decrease} className='btn2'>-</button>
      <button onClick={this.reset} className='btn3'>Reset</button>
      </>
    )
  }
}
export default App
