import React from 'react';
import profile from './src/img/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faAddressBook, faPhone } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
    { name: 'home', icon: faHome, label: 'صفحه اصلی' },
    { name: 'attributes', icon: faUser, label: 'مشخصات من' },
    { name: 'rezome', icon: faAddressBook, label: 'رزومه من' },
    { name: 'conect', icon: faPhone, label: 'تماس با من' },
];

export default function Sidebar({ handler, classActive }) {
    return (
        <aside className="sidebar">
            <div className="user">
                <img className="img-user" src={profile} alt="user" />
                <div className="name-user">محسن رضایی</div>
            </div>
            <div className="list-item">
                <ul className="items">
                    {menuItems.map(({ name, icon, label }) => (
                        <li key={name} 
                            onClick={() => handler(name)} 
                            className={classActive === name ? "item-container-active" : "item-container"}
                        >
                            <FontAwesomeIcon icon={icon} />
                            <span className="item">{label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}