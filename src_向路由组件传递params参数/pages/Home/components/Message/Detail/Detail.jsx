import React, { Component } from 'react'

const DetailData = [
    {id:'01',content:'wew'},
    {id:'02',content:'反倒是'},
    {id:'03',content:'放松放松'},
]

export default class Detail extends Component {
    render() {
        const {id,title} = this.props.match.params
        const msg = DetailData.find((item) => {
            return item.id===id
        })
        console.log(this.props.match.params)
        return (
           <ul>
               <li>id:{id}</li>
                <li>title:{title}</li>
                <li>sda:{msg.content}</li>
           </ul>
        )
    }
}
