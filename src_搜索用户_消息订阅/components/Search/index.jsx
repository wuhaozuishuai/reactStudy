import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
// import { response } from 'express'
export default class Search extends Component {
    
    search = ()=>{
        
        const { keyWordElement:{value:keyWord} } = this
        // 发送请求前更改app首次进入状态
        // this.props.updateAppState({isFirst:false,isLoading:true})
        PubSub.publish('data', { isFirst: false, isLoading: true })
        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            response => {
                // this.props.updateAppState(
                    // {
                    //     users:response.data.items,
                    //     isLoading:false,
                    //     err:''
                    // }
                // )
                PubSub.publish('data', {
                    users: response.data.items,
                    isLoading: false,
                    err: ''
                })

            },
            error =>{
                // this.props.updateAppState(
                    // {
                    //     users:[],
                    //     isLoading: false,
                    //     err:error
                    // }
                // )
                PubSub.publish('data', {
                        users: [],
                        isLoading: false,
                        err: error
                })
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索GitHub用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
