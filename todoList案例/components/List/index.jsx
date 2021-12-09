import React, { Component } from 'react'
import Item from "../Item"; 
import PropTypes from 'prop-types'
  
import './index.css'

export default class List extends Component {
  static propTypes = {
    checkTodo: PropTypes.func.isRequired,
    todos:PropTypes.array.isRequired
  }
    render() {
        const {todos,checkTodo,deleteTodo} = this.props
        return (
          <ul className="todo-main">
              {
                todos.map((todo,index)=>{
                  return <Item key={todo.id} {...todo} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
                })
              }
          </ul>
        )
    }
}
