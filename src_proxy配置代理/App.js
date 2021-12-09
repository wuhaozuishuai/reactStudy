import axios from 'axios'
import React,{Component} from 'react'

export default class App extends Component{
  handleClick = ()=>{
    axios.get('http://localhost:3000/api1/students').then(
      response => {console.log(response.data)},
      error =>{console.log(error)}
    )
  }
   handleClick2 = () => {
     axios.get('http://localhost:3000/api2/cars').then(
       response => {
         console.log(response.data)
       },
       error => {
         console.log(error)
       }
     )
   }
  render(){
    return(
      <div>
        <button onClick={this.handleClick}>点击获取数据</button>
        <button onClick={this.handleClick2}>点击获取数据</button>
      </div>
    )
  }
}