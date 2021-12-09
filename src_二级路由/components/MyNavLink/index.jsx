import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class MyNavLink extends Component {
    render() {
        const activeClassName = "qw"
        const className1 = "list-group-item"
        console.log(this.props);
        // const { thisKey,children} = this.props
        return (
            <NavLink activeClassName={activeClassName} className={className1} {...this.props} />
        )
    }
}
