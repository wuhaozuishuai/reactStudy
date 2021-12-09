// 引入react核心库
import React from 'react'
// 引入reactDOM 
import ReactDOM from 'react-dom'
import App from './App'
import {  BrowserRouter} from 'react-router-dom'

ReactDOM.render( <BrowserRouter><App/></BrowserRouter>, document.getElementById('root'))