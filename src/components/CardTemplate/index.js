import React from 'react'

const CardTemplate = ({ card, isMatched, isSelected, onClick }) => {
    return (
        <div>
            <p>{card.suit}</p>
            <p>{card.value}</p>
        </div>
    )
}

export default CardTemplate
