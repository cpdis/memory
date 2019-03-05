import React from 'react'

const CardTemplate = ({ card, selectHandler }) => {
    return (
        <div onClick={() => { selectHandler() }}>
            <img
                src={card.img}
                alt={card.suit}
                style={{ width: "100px", height: "140px" }}
            />
        </div>
    )
}

export default CardTemplate