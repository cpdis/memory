import React from 'react'
import PropTypes from 'prop-types';

const CardTemplate = ({ card, selected, selectHandler }) => {
    let display = ''
    selected ? display = card.img : display = require('../../data/SVG_Cards/back.png')

    return (
        <div data-testid="button"
            onClick={() => {
                if (!selected) { // Check to see if card is already selected
                    selectHandler()
                }
            }}>
            <img
                src={display}
                alt={card.suit}
                style={{ width: "100px", height: "140px" }}
            />
        </div>
    )
}

CardTemplate.propTypes = {
    card: PropTypes.object,
    selected: PropTypes.bool,
    selectHandeler: PropTypes.func
}

export default CardTemplate