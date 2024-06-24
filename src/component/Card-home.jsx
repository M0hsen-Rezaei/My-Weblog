import React from 'react'
import user from './src/img/user.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function Card_home({handler}) {
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
                لورم ایپسوم متن ساخت از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان طلبد،ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان طلبد،ایجاد کردشامل حروف چینی دستاوردهای اصلی، و جوابگوی
            </div>
        </div>
    </div>
    <footer>
        <div onClick={()=> {handler("home" , "next")}} className="arow next"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></div>
        <div onClick={()=> {handler("home" , "prev")}} className="arow prev"><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></div>
    </footer>
</div>
  )
}
