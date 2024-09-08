import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function Card_attributes({ handler }) {
  return (
    <div className="body" id="card-attributes">
      <header className="page-name">
        <h3> مشخصات من </h3>
      </header>

      <div id="page-attributes">
        <h2 className="text-bold">توسعه دهنده و طراح سایت</h2>
        <div className="container-cols">
          <div className="col col1">
            <ul className="list-attributes">
              <div className="item-attribute"><li>تاریخ تولد : </li><span>1382/9/14</span></div>
              <div className="item-attribute"><li>محل سکونت : </li><span>اصفهان</span></div>
              <div className="item-attribute"><li>شماره تماس : </li><span>09130161467</span></div>
            </ul>
          </div>
          <div className="col col2">
            <ul className="list-attributes">
              <div className="item-attribute"><li>رشته تحصیلی : </li><span>مهندسی کامپیوتر</span></div>
              <div className="item-attribute"><li>مدرک تحصیلی : </li><span>کارشناسی</span></div>
              <div className="item-attribute"><li>شغل : </li><span>فرانت اند کار</span></div>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <div onClick={() => { handler("attributes", "next") }} className="arow next"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></div>
        <div onClick={() => { handler("attributes", "prev") }} className="arow prev"><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></div>
      </footer>
    </div>
  )
}
