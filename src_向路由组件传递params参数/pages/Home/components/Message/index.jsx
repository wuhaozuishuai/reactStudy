import React, { Component } from 'react'
import Detail from './Detail/Detail'
import {Link,Route} from 'react-router-dom'
export default class Message extends Component {
    state = {
        messageArr : [
            {id:'01',title:'消息1'},
            {id:'02',title:'消息2'},
            {id:'03',title:'消息3'},
        ]
    }
    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                  {messageArr.map((mesObj)=>{
                      return (
                          <li key={mesObj.id}>
                              {/* 向路由组件传递params参数 */}
                              <Link to={`/home/message/detail/${mesObj.id}/${mesObj.title}`}>{mesObj.title}</Link>&nbsp;&nbsp;
                          </li>
                      )
                  })}
                </ul>
                <hr />
                <Route path="/home/message/detail/:id/:title" component={Detail}/>
            </div>
        )
    }
}
