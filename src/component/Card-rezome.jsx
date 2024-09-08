import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import myRezome from './src/img/MyResume-1.jpg'

export default function Card_rezome({handler}) {
    return (
        <div className="body" id="card-rezome">
            <header className="page-name">
                <h3> رزومه من </h3>
            </header>

            <div id="page-rezome">
                <a href={myRezome}><img className='img-rezome' src={myRezome} alt="" /></a>
                <a href={myRezome} className='btn' download={myRezome}>دانلود</a>

            </div>
            <footer>
            <div onClick={()=> {handler("rezome" , "next")}} className="arow next"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></div>
            <div onClick={()=> {handler("rezome" , "prev")}} className="arow prev"><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></div>
            </footer>
        </div>
    )
}
