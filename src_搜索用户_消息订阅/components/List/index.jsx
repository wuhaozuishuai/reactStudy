import React, { Component } from 'react'
import './List.css'
import PubSub from 'pubsub-js'
export default class List extends Component {
    state = {
        users: [],//初始化用户列表
        isFirst: true,//用于标识用户是否为第一次打开
        isLoading: false,//标识加载状态
        err: '',//存储请求相关的错误信息
    }
    componentDidMount(){
        this.token = PubSub.subscribe('data',(msg,data)=>{
            console.log(data);
            this.setState(data)
        })
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }
    render() {
        const {users,isFirst,isLoading,err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>输入用户名查询</h2> :
                    isLoading ?<h2>加载中。。。</h2> :
                    err ? <h3>{err.message}</h3>: 
                    users.map(item=>{
                        return(
                            <div className="card" key={item.id}>
                                <a href={item.html_url} target="_blank" rel="noreferrer">
                                    <img src={item.avatar_url} alt="head_portrait" style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{item.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
