import React, { Component } from 'react'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
export default class App extends Component {

  render() {
    // const {users,isFirst,isLoading,err} = this.state
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}
              {/* <NavLink activeClassName="qw"  className="list-group-item" to="/about">About</NavLink> */}
              {/* <NavLink activeClassName="qw" className="list-group-item" to="/home">Home</NavLink> */}
              <MyNavLink to="/home" >Home</MyNavLink>
              <MyNavLink to="/about" >About</MyNavLink>
           
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  {/* exact精准匹配 */}
                  <Route  path="/home" component={Home} />
                  <Route path="/about" component={About} />
                  <Redirect to="/home"/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



