import React from 'react'
import profile from './src/img/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUser,faAddressBook,faPhone } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


export default function Sidebar({handler , ClassActive}) {


    return (
        <aside className="sidebar">
            <div className="user">
                <img className="img-user" src={profile} alt="user" />
                <div className="name-user">محسن رضایی</div>
            </div>
            <div className="list-item">
                <ul className="items">
                    <div onClick={()=>{handler("home")}} className={ClassActive == "home" ? "item-container-active" : "item-container"}><FontAwesomeIcon icon={faHome}></FontAwesomeIcon><li className="item" >صفحه اصلی</li></div>
                    <div onClick={()=>{handler("attributes")}} className={ClassActive == "attributes" ? "item-container-active" : "item-container"}><FontAwesomeIcon icon={faUser}></FontAwesomeIcon><li className="item" >مشخصات من</li></div>
                    <div onClick={()=>{handler("rezome")}} className={ClassActive == "rezome" ? "item-container-active" : "item-container"}><FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon><li className="item" >رزومه من</li></div>
                    <div onClick={()=>{handler("conect")}} className={ClassActive == "conect" ? "item-container-active" : "item-container"}><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon><li className="item" >تماس با من</li></div>
                </ul>
            </div>
        </aside>
    )
}
