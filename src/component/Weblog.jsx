import React, { useState, useEffect } from 'react';
import './style.css';
import Sidebar from './Sidebar';
import Header from './Header';
import MobileMenu from './MobileMenu';
import Card_home from './Card-home';
import Card_attributes from './Card-attributes';
import Card_rezome from './Card-rezome';
import Card_conect from './Card-conect';

const Cards = {
    home: Card_home,
    attributes: Card_attributes,
    rezome: Card_rezome,
    conect: Card_conect,
};

export default function Weblog() {
    const [activeCard, setActiveCard] = useState('home');
    const [showCard, setShowCard] = useState(<Card_home />);
    const [lightMode, setLightMode] = useState(false);

    useEffect(() => {
        const CurrentCard = Cards[activeCard];
        setShowCard(<CurrentCard handler={handleArrow} />);
    }, [activeCard]);

    const handleActiveCard = (card) => {
        setActiveCard(card);
    };

    const getNextIndex = (index, direction) => {
        const length = Object.keys(Cards).length;
        return direction === 'next'
            ? (index + 1) % length
            : (index - 1 + length) % length;
    };

    const handleArrow = (card, type) => {
        const index = Object.keys(Cards).indexOf(card);
        const nextIndex = getNextIndex(index, type);
        setActiveCard(Object.keys(Cards)[nextIndex]);
    };

    const switchCard = (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            const direction = e.key === 'ArrowRight' ? 'next' : 'prev';
            handleArrow(activeCard, direction);
        }
    };

    const toggleTheme = () => {
        setLightMode(prevMode => !prevMode);
    };

    return (
        <div
            tabIndex="0"
            onKeyDown={switchCard}
            className={`container ${lightMode ? 'light-mode' : 'dark-mode'}`}
            dir="rtl"
        >
            <Header handleChange={toggleTheme} themeIcon={lightMode ? 'sun' : 'moon'} />
            <div className="container-main">
                <Sidebar handler={handleActiveCard} classActive={activeCard} />
                {showCard}
            </div>
            <MobileMenu handler={handleActiveCard} classActive={activeCard} />
        </div>
    );
}