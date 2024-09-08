import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import iconTelegram from './src/img/iconTelegram.svg'
import iconInstagram from './src/img/iconInstagram.gif'
import iconWhatsap from './src/img/iconWhatsap.gif'
import iconEmail from './src/img/iconEmail.gif'
import iconPhone from './src/img/iconPhone.gif'
import iconLinkedin from './src/img/iconLinkedin.gif'

export default function Card_conect({ handler }) {
  return (

    <div className="body" id="card-conect">
      <header className="page-name">
        <h3> تماس با من </h3>
      </header>

      <div id="page-conect">
        <div className="container-rows">
          <div className="row">
            <ul className="list-conects">
              <div className="item-conect">
                <a href="https://t.me/Moohsen-Rz">
                <img className="logo-icon" src={iconTelegram} alt="telegram" /> <p>Telegram</p>
                </a>
              </div>
              <div className="item-conect">
                <a href="https://www.instagram.com/_mohsen_.rz?igsh=MThzajBmNTc4YjI3aw==">
                <img className="logo-icon" src={iconInstagram} alt="instagram" /> <p>Instagram</p>
                </a>
              </div>
              <div className="item-conect">
                <a href="https://wa.me/989130161467">
                <img className="logo-icon" src={iconWhatsap} alt="whatsapp" /> <p>Whatsapp</p>
                </a>
              </div>
            </ul>
          </div>
          <div className="row">
            <ul className="list-conects">
              <div className="item-conect">
                <a href="mailto: mohsenrezaii315@gmail.com">
                <img className="logo-icon" src={iconEmail} alt="email" /> <p>Email</p>
                </a>
              </div>
              <div className="item-conect">
                <a href="tel:09130161467">
                <img className="logo-icon" src={iconPhone} alt="phone" /> <p>Phone</p>
                </a>
              </div>
              <div className="item-conect">
                <a href="https://www.linkedin.com/in/mohsen-rezaei-8a0a77301">
                <img className="logo-icon" src={iconLinkedin} alt="linkedin" /> <p>Linkedin</p>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <div onClick={() => { handler("conect", "next") }} className="arow next"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></div>
        <div onClick={() => { handler("conect", "prev") }} className="arow prev"><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></div>
      </footer>
    </div>
  )
}
