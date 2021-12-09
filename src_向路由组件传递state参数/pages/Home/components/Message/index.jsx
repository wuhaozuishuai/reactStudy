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
                              {/* <Link to={`/home/message/detail/${mesObj.id}/${mesObj.title}`}>{mesObj.title}</Link>&nbsp;&nbsp; */}
                              {/* 向路由组件传递search参数 */}
                              {/*<Link replace={true} to={`/home/message/detail/?id=${mesObj.id}&title=${mesObj.title}`}>{mesObj.title}</Link>&nbsp;&nbsp;*/}
                              {/* 向路由组件传递state参数 */}
                              <Link  to={{pathname:'/home/message/detail',state:{id:mesObj.id,title:mesObj.title}}}>{mesObj.title}</Link>&nbsp;&nbsp;
                          </li>
                      )
                  })}
                </ul>
                <hr />
                {/* 路由组件接受params参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}
                {/* 路由组件接受search参数（无需申明） */}
                {/*<Route path="/home/message/detail" component={Detail}/>*/}
                {/* 路由组件接受state参数（无需申明） */}
                <Route path="/home/message/detail" component={Detail}/>
            </div>
        )
    }
}
