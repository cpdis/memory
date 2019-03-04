import React, { Component } from 'react'
import CardTemplate from "../CardTemplate"

import cards from '../../data/deck'
import shuffle from '../../utils/shuffle'

import styled from "styled-components";

const GameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 15px;
  min-width: 100vw;
  overflow: hidden;
`;

const CardContainer = styled.div`
  flex: 0 1 20%;
  max-width: 100px;
  height: 140px;
  background-color: white;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  margin: 20px 25px 20px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: cards, // TODO: Shuffle deck
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
                <GameContainer>
                    {cards.map(card => (
                        <CardContainer>
                            <CardTemplate
                                key={card.id}
                                card={card}
                                // TODO: Add image URL
                                isMatched={matched.includes(card)}
                                isSelected={selected.includes(card)}
                                onClick={() => this.selectHandler(card)}
                            />
                        </CardContainer>
                    ))}
                </GameContainer>
            </div>
        )
    }
}
