import React, { Component } from 'react'
import { NavLink,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
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
              <MyNavLink to="/about" >About</MyNavLink>
              <MyNavLink to="/home" >Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                  <Route path="/about" component={About} />
                  <Route  path="/home" component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


// TODO 封装路由

class MyNavLink extends Component {
  render() {
    const activeClassName = "qw"
    const className1 = "list-group-item"

    // const { thisKey,children} = this.props
    return (
      <NavLink activeClassName={activeClassName} className={className1} {...this.props}/>
    )
  }
}
