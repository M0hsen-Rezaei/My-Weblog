import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Header({ handleChange, themeIcon }) {
    return (
        <div className="header">
            <input 
                type="checkbox" 
                className="checkbox" 
                id="checkbox" 
                onChange={handleChange} 
            />
            <label htmlFor="checkbox" className={`checkbox-label ${themeIcon}`}>
                <FontAwesomeIcon icon={faSun} />
                <FontAwesomeIcon icon={faMoon} />
                <span className="ball"></span>
            </label>
        </div>
    );
}