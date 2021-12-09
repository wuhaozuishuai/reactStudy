import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    handleCheckAll= (e)=>{
      
      this.props.checkAllTodo(e.target.checked)
    }
  handleClearAll = ()=>{
    this.props.clearAllTodo()
  }
    render() {
      const {todos} = this.props
      const count = todos.length
      const doneCount = todos.reduce((pre, todo) => { return pre + (todo.done ? 1 : 0)},0)
      console.log(doneCount);
      return (
          <div className="todo-footer">
            <label>
            <input onChange={this.handleCheckAll} type="checkbox" checked={doneCount === count && doneCount!==0?true:false}/>
            </label>
            <span>
              <span>已完成{doneCount}</span> / 全部{count}
            </span>
            <button onClick={this.handleClearAll} className="btn btn-danger">清除已完成任务</button>
          </div>
        );
    }
}
