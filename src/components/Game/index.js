import React, { Component } from 'react'
import Card from "../Card"

import cards from '../../data/deck'
import shuffle from '../../utils/shuffle'

export default class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: cards,
            matched: [],
            selected: []
        }
    }

    selectHandler = (index) => {
        const { cards, matched, selected } = this.state

        if (selected.length === 0) { // Select the first card
            this.setState({ selected: [index] })
        } else if (selected.length === 1) { // Select the second card
            if (cards[selected[0]].value === cards[index].value &&  // Check if card value is matching
                cards[selected[0]].suit === cards[index].suit) {   // TODO: Check if card color is matching (dependent on suit)
                // The cards are a match
                this.setState({
                    // TODO: Added code to remove cards from deck when matched
                    matched: matched.concat([selected[0], index]),
                    selected: []
                })
            } else {
                // The cards are not a match
                this.setState({
                    selected: [selected[0], index]
                })
            }
        }
    }

    render() {
        const { cards, matched, selected } = this.state

        return (
            <div>
                <h1>Memory</h1>
                <p>Memory (also known as Concentration) is a card game played with one or more players. Using a standard card deck (including both jokers) the players shuffle the deck and lay all of the cards face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards. Concentration can be played with any number of players or as solitaire.</p>
                <div>
                    {cards.map(i => (
                        <Card
                            key={i}
                            // TODO: Add image URL
                            isMatched={matched.includes(i)}
                            isSelected={selected.includes(i)}
                            onClick={() => this.selectHandler(i)}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
