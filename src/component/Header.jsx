import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun,faMoon } from '@fortawesome/free-solid-svg-icons'


export default function Header({handleChange , theemIcon}) {
    return (
        <div className="header">
            <input type="checkbox" class="checkbox" id="checkbox" onChange={()=> {handleChange()}}/>
            <label for="checkbox" class={`checkbox-label ${theemIcon}`}>
                {/* <i class="fas fa-sun"></i> */}
                <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
                {/* <i class="fas fa-moon"></i> */}
                <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>

                <span class="ball"></span>
            </label>
        </div>
    )
}
