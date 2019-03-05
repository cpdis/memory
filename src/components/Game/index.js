import React, { Component } from 'react'
import CardTemplate from "../CardTemplate"

import deck from '../../data/deck'
import shuffle from '../../utils/shuffle'

import styled from "styled-components";

const GameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  overflow: hidden;
`;

const CardContainer = styled.div`
  flex: 0 1 20%;
  max-width: 100px;
  height: 140px;
  border-radius: 4px;
  margin: 20px 25px 20px 0px;
  overflow: hidden;
`;

const initializeCards = (arr) => {
    return shuffle(arr)
}

export default class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: initializeCards(deck),
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
                ((cards[selected[0]].suit === ("hearts" || "diamonds")) === (cards[index].suit === ("hearts" || "diamonds")) ||
                    (cards[selected[0]].suit === ("spades" || "clubs")) === (cards[index].suit === ("spades" || "clubs")))) {

                // Remove the matched cards from the deck
                cards.splice(selected[0], 1)
                cards.splice(index, 1)

                // Update the card deck and matched cards to matched
                this.setState({
                    cards: cards,
                    matched: matched.concat([selected[0], index]),
                    selected: []
                })
            } else {
                // The cards are not a match
                this.setState({
                    selected: [selected[0], index]
                })
                setTimeout(() => {
                    this.setState({ selected: [] })
                }, 1250);
            }
        }
    }

    // resetGame = () => {
    //     this.setState({
    //         cards: initializeCards(deck),
    //         matched: [],
    //         selected: []
    //     })
    // }

    render() {
        const { cards, matched, selected } = this.state

        if (this.state.matched === this.state.cards.length / 2) {
            alert('You Win!');
        }

        return (
            <div>
                <h1>Memory</h1>
                <h2>Matched: {matched.length / 2}</h2>
                {/* <button onClick={() => this.resetGame()}>Reset</button> */}
                <p><strong>Directions: </strong>Using a standard card deck (including both jokers)
                the players shuffle the deck and lay all of the cards face down on a surface and
                two cards are flipped face up over each turn. The object of the game is to turn
                over pairs of matching cards.</p>
                <GameContainer>
                    {cards.map((card, i) => (
                        <CardContainer key={i}>
                            <CardTemplate
                                key={i}
                                card={card}
                                selected={selected.includes(i)}
                                selectHandler={() => this.selectHandler(i)}
                            />
                        </CardContainer>
                    ))}
                </GameContainer>
            </div>
        )
    }
}
