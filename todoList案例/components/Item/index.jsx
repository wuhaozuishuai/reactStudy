import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = {
        mouse:false
    }
    handleMouse = (flag)=>{
        return (event)=>{
            this.setState({mouse:flag})
        }
    }
    handleCheck = (id)=>{
        const { checkTodo } = this.props
        return (event)=>{
            checkTodo(id, event.target.checked)
        }
    }
    handleDelete = (id) => {
        const { deleteTodo } = this.props
        return () => {
            if(window.confirm('确认删除？')){
                deleteTodo(id)
            }
        }
    }
    render() {
        const {id,name,done} = this.props
        return (
            <li style={{background:this.state.mouse?'#ddd':'#fff'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input onChange={this.handleCheck(id)} type="checkbox" checked={done}/>
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{ display: this.state.mouse ? 'block' : 'none' }} > 删除 </button>
            </li>
                )
    }
}
