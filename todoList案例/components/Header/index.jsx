import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'
export default class Header extends Component {
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }
  handleKeyUp = (e)=>{
    let {value} = e.target
    if (e.keyCode !== 13){
      return
    }
    if (value.trim() === '') return alert('输入不能为空')
    const todoObj = {
      id: nanoid(),
      name:value,
      done:false
    }
    this.props.addTodo(todoObj)
    e.target.value  = ''
    
  }
    render() {
        return (
          <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
          </div>
        );
    }
}
