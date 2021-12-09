// 引入
import React,{Component} from 'react'

import Header from './components/Header'
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css'
// 创建外壳组件

export default class App extends Component {
    //初始化状态 
    state = {
      todos:[
        {id:'001',name:'吃饭',done:false},
        {id:'002',name:'睡觉',done:false},
        {id:'003',name:'打代码',done:false}
      ]
    }
    addTodo = (todoObj)=>{
      const {todos} = this.state
      const newTodos = [todoObj,...todos]
      console.log(newTodos);
      this.setState({todos:newTodos})
    }
    checkTodo = (id, done) => {
      const {todos} = this.state
      const newTodos = todos.map((todoObj)=>{
        if(todoObj.id === id){
          return {
            ...todoObj,done
          }
        }else{
          return todoObj
        }
      })
      this.setState({todos:newTodos})
    }
    deleteTodo = (id)=>{
      const {todos} = this.state
       const newTodos = todos.filter((todoObj) => {
          return todoObj.id !== id
      })
      this.setState({
        todos: newTodos
      })
    }
    checkAllTodo = (done)=>{
      const {todos} = this.state
      const newTodos = todos.map((todoObj) => {
        return {...todoObj,done}
      })
      this.setState({todos:newTodos})
    }
    clearAllTodo = ()=>{
      const {todos} = this.state
      const newTodos = todos.map((todoObj) => {
        return {...todoObj,done:false}
      })
      this.setState({todos:newTodos})
    }
    render(){
        return (
          <div className="todo-container">
            <div className="todo-wrap">
              <Header addTodo = {this.addTodo}/>
              <List todos={this.state.todos} deleteTodo={this.deleteTodo} checkTodo={this.checkTodo}/>
              <Footer clearAllTodo={this.clearAllTodo} checkAllTodo={this.checkAllTodo} todos={this.state.todos}/>
            </div>
          </div>
        );
    }
}