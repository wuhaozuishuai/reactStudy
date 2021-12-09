import React, { Component } from 'react'
import {withRouter} from "react-router-dom";

 class Header extends Component {
    back = ()=>{
        this.props.history.goBack()
    }
    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.back}>回退</button>
            </div>
        )
    }
}

//todo withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
export default withRouter(Header)
