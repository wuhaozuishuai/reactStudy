import React, { Component } from 'react'
import './List.css'
export default class List extends Component {
    render() {
        const {users,isFirst,isLoading,err} = this.props
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
