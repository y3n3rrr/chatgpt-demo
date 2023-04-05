import React from 'react'
import './style.css'



export default function Message(props) {
    const {avatar, title, content, isChatGpt} = props


  return (
    <div className={`media ${!isChatGpt ? "answer" : ""}`}>
    <img className="mr-3" src={avatar} alt="Generic placeholder image" />
    <div className="media-body">
      <h5 className="mt-0">{title}</h5>
        {content}
     </div>
  </div>
  )
}
