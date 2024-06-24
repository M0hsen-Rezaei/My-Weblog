import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUser,faAddressBook,faPhone } from '@fortawesome/free-solid-svg-icons'

export default function MobileMenu({handler , ClassActive}) {
    return (
        <div class="menu-mobile">
            <div onClick={()=>{handler("home")}} className={ClassActive == "home" ? "item-active" : ""}><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></div>
            <div onClick={()=>{handler("attributes")}} className={ClassActive == "attributes" ? "item-active" : ""}><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></div>
            <div onClick={()=>{handler("rezome")}} className={ClassActive == "rezome" ? "item-active" : ""}><FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon></div>
            <div onClick={()=>{handler("conect")}} className={ClassActive == "conect" ? "item-active" : ""}><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></div>
        </div>
    )
}
