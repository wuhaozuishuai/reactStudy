import React, { Component } from 'react'
import News from './components/News'
import MyNavLink from '../../components/MyNavLink'
import Message from './components/Message'
import { Switch,Route,Redirect} from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
        <div>
            <h3>HOME</h3>
            <div>
                <ul className="nav nav-tabs">
                  <li>
                    {/* <a className="list-group-item" href="./home-news.html">News</a> */}
                    <MyNavLink to="/home/news">News</MyNavLink>
                  </li>
                  <li>
                    {/* <a className="list-group-item " href="./home-message.html">Message</a> */}
                  <MyNavLink to="/home/message">Message</MyNavLink>

                  </li>
                </ul>
                {/* <News/>
                <Message/> */}
              {/* 注册路由 */}
              <Switch>
                
                <Route path="/home/news" component={News} />
                <Route path="/home/message" component={Message} />
                <Redirect to="/home/news" />
              </Switch>
            </div>
        </div>
         
        )
    }
}
