import React, { Component } from 'react'
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
        const { cards, matched, selected } = this.state;

        if (selected.length === 0) {
            this.setState({ selected: [index] })
        } else if (selected.length === 1) {
            // if () {
            //     // The cards are a match
            //     this.setState({})
            // } else {
            //     // The cards are not a match
            //     this.setState({})
            // }
        }
    }

    render() {
        const { cards, matched, selected } = this.state;

        return (
            <div>
                <h1>Memory</h1>
                <p>Memory (also known as Concentration) is a card game played with one or more players. Using a standard card deck (including both jokers) the players shuffle the deck and lay all of the cards face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards. Concentration can be played with any number of players or as solitaire.</p>
                {this.state.cards.map(card => (
                    <div>
                        <li>
                            {card.id}, {card.suit}, {card.value}
                        </li>
                    </div>
                ))}
            </div>
        )
    }
}
