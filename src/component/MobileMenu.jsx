import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faAddressBook, faPhone } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
    { name: 'home', icon: faHome },
    { name: 'attributes', icon: faUser },
    { name: 'rezome', icon: faAddressBook },
    { name: 'conect', icon: faPhone },
];

export default function MobileMenu({ handler, classActive }) {
    return (
        <div className="menu-mobile">
            {menuItems.map(({ name, icon }) => (
                <div 
                    key={name}
                    onClick={() => handler(name)} 
                    className={classActive === name ? "item-active" : ""}
                >
                    <FontAwesomeIcon icon={icon} />
                </div>
            ))}
        </div>
    );
}