import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function Card_conect({handler}) {
    return (

        <div className="body" id="card-conect">
            <header className="page-name">
                <h3> تماس با من </h3>
            </header>

            <div id="page-conect">

            </div>
            <footer>
            <div onClick={()=> {handler("conect" , "next")}} className="arow next"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></div>
            <div onClick={()=> {handler("conect" , "prev")}} className="arow prev"><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></div>
            </footer>
        </div>
    )
}
