import React from 'react'

const CardTemplate = ({ card, selected, matched, selectHandler }) => {
    let display = ''
    selected ? display = card.img : display = require('../../data/SVG_Cards/back.png')

    return (
        <div onClick={() => {
            if (!selected) {
                selectHandler()
            }
        }}>
            <img
                src={card.img}
                alt={card.suit}
                style={{ width: "100px", height: "140px" }}
            />
        </div>
    )
}

export default CardTemplate