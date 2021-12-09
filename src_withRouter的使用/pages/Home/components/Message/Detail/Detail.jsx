import React, { Component } from 'react'
// import qs from 'querystring'
const DetailData = [
    {id:'01',content:'wew'},
    {id:'02',content:'反倒是'},
    {id:'03',content:'放松放松'},
]

export default class Detail extends Component {
    render() {
        // 接受params参数
        // const {id,title} = this.props.match.params
        // 接受search参数
        // const { id, title } = qs.parse(this.props.location.search.slice(1))
        //接受state参数
        const {id,title} = this.props.location.state || {}
        const msg = DetailData.find((item) => {
            return item.id===id
        }) || {}

        return (
           <ul>
               <li>id:{id}</li>
                <li>title:{title}</li>
                <li>content:{msg.content}</li>
           </ul>
        )
    }
}
