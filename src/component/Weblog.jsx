import React from 'react'
import './style.css'
import Sidebar from './Sidebar'
import Header from './Header'
import MobileMenu from './MobileMenu'
import Card_home from './Card-home'
import Card_attributes from './Card-attributes'
import Card_rezome from './Card-rezome'
import Card_conect from './Card-conect'
import { useState, useEffect } from 'react'

export default function Weblog() {

    const Cards = ["home", "attributes", "rezome", "conect"]
    const [ActiveCard, setActiveCard] = useState(Cards[0])
    let [ShowCard, setShowCard] = useState()
    const [LightMode, setLightMode] = useState(false)


    useEffect(() => {
        if (ActiveCard == "home") {
            setShowCard(<Card_home handler={handleAroww}></Card_home>)
        } else if (ActiveCard == "attributes") {
            setShowCard(<Card_attributes handler={handleAroww}></Card_attributes>)
        } else if (ActiveCard == "rezome") {
            setShowCard(<Card_rezome handler={handleAroww}></Card_rezome>)
        } else if (ActiveCard == "conect") {
            setShowCard(<Card_conect handler={handleAroww}></Card_conect>)
        }
    }, [ActiveCard])


    function handleActiveCard(card) {
        setActiveCard(card)
        console.log(ActiveCard);
    }

    function getNextIndex(index, direction) {
        const length = Cards.length
        if (direction === "next") {
            return (index + 1) % length
        } else if (direction === "prev") {
            return (index - 1 + length) % length
        }
    }

    function handleAroww(card, type) {
        const index = Cards.indexOf(card)
        const nextIndex = getNextIndex(index, type)
        setActiveCard(Cards[nextIndex])
    }


    function sswitchCard(e) {
        if (e.key == "ArrowRight") {
            const index = Cards.indexOf(ActiveCard)
            const nextIndex = getNextIndex(index, "next")
            setActiveCard(Cards[nextIndex])
            console.log(e.key);
        }
        else if (e.key == "ArrowLeft") {
            const index = Cards.indexOf(ActiveCard)
            const nextIndex = getNextIndex(index, "prev")
            setActiveCard(Cards[nextIndex])
            console.log(e.key);
        }
    }

    function handleTheem() {
        setLightMode(!LightMode)
    }

    return (

        <div tabIndex="0" onKeyDown={($event) => { sswitchCard($event) }} className={`container ${LightMode ? "light-mode" : "dark-mode"}`} dir="rtl">

            <Header handleChange={handleTheem} theemIcon={LightMode ? "sun" : "moon"}></Header>

            <div className="container-main">
                <Sidebar handler={handleActiveCard} ClassActive={ActiveCard}></Sidebar>
                {ShowCard}
            </div>

            <MobileMenu handler={handleActiveCard} ClassActive={ActiveCard}></MobileMenu>


        </div>

    )
}
