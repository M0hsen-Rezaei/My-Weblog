import React from 'react'
import user from './src/img/user.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function Card_home({handler , handlerActiveCard}) {
  return (
    <div className="body" id="card-home">
    <header className="page-name">
        <h3> صفحه اصلی </h3>
    </header>

    <div id="page-home">
        <div className="row1">
            <div className="bio">
                <p>سلام</p>
                <h2 className="text-bold">محسن رضایی هستم</h2>
            </div>
            <div>
                <img className="img-profile" src={user} alt="profile"/>
            </div>
        </div>
        <div className="row2">
            <div className="description">
                دانشجوی کارشناسی پیوسته مهندسی کامپیوتر در دانشگاه آزاد اسلامی خمینی شهر <br></br>برنامه نویس فرانت اند مسلط به <b>react</b> <br></br>کارشناس و پشتیبان سایت مسلط به <b>وردپرس</b> <br></br> کار با نرم افزار های فتوشاپ و فیگما
            </div>
        <a onClick={()=> {handlerActiveCard("rezome");}} className='btn'>تماس با من</a>
        </div>
    </div>
    <footer>
        <div onClick={()=> {handler("home" , "next")}} className="arow next"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></div>
        <div onClick={()=> {handler("home" , "prev")}} className="arow prev"><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></div>
    </footer>
</div>
  )
}
