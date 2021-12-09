import React, { Component } from 'react'

import List from './components/List'

import Search from './components/Search'
export default class App extends Component {
  state = {
    users: [],//初始化用户列表
    isFirst:true,//用于标识用户是否为第一次打开
    isLoading:false,//标识加载状态
    err:'',//存储请求相关的错误信息
  }
  updateAppState = (stateObj)=>{
    this.setState(
       stateObj
    )
  }
  render() {
    // const {users,isFirst,isLoading,err} = this.state
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state} />
      </div>
    )
  }
}
