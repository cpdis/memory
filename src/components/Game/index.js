import React, { Component } from 'react'
import CardTemplate from "../CardTemplate"

import deck from '../../data/deck'
import shuffle from '../../utils/shuffle'

import styled from "styled-components";

export default class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: shuffle(deck),
            matched: [],
            selected: [],
            moves: 0
        }
    }

    selectHandler = (index) => {
        const { cards, matched, selected, moves } = this.state

        if (selected.length === 0) { // Select the first card
            this.setState({ selected: [index] })
        } else if (selected.length === 1) { // Select the second card
            if (cards[selected[0]].value === cards[index].value &&  // Check if card value is matching
                ((cards[selected[0]].suit === ("hearts" || "diamonds")) === (cards[index].suit === ("hearts" || "diamonds")) ||
                    (cards[selected[0]].suit === ("spades" || "clubs")) === (cards[index].suit === ("spades" || "clubs")) ||
                    (cards[selected[0]].suit === cards[index].suit))) {

                // Remove the matched cards from the deck
                cards.splice(selected[0], 1)
                cards.splice(index, 1)

                // Update the card deck and matched cards to matched
                this.setState({
                    cards: cards,
                    matched: matched.concat([selected[0], index]),
                    selected: [],
                    moves: moves + 1
                })
            } else {
                // The cards are not a match
                this.setState({
                    selected: [selected[0], index],
                    moves: moves + 1
                })

                // Give the player time to look at the cards before flipping over
                setTimeout(() => {
                    this.setState({ selected: [] })
                }, 1250);
            }
        }
    }

    resetGame = () => {
        this.setState({
            cards: shuffle(deck),
            matched: [],
            selected: [],
            moves: 0
        })
    }

    render() {
        const { cards, matched, selected, moves } = this.state

        console.log(cards.length)
        console.log(deck.length)
        if (cards.length === 0) {
            return (
                <div>
                    <Container>
                        <NavBar>
                            <Memory>
                                <h1>Prefect Memory</h1>
                            </Memory>
                            <GameInfo>
                                <h2>Matched: {matched.length / 2}</h2>
                                <h2>Moves: {moves}</h2>
                                <button onClick={() => this.resetGame()}>Reset</button>
                            </GameInfo>
                        </NavBar>
                    </Container>

                    <WinContainer>🎉 You win! 🎉</WinContainer>
                </div>
            )
        } else {
            return (
                <div>
                    <Container>
                        <NavBar>
                            <Memory>
                                <h1>Prefect Memory</h1>
                            </Memory>
                            <GameInfo>
                                <h2>Matched: {matched.length / 2}</h2>
                                <h2>Moves: {moves}</h2>
                                <button onClick={() => this.resetGame()}>Reset</button>
                            </GameInfo>
                        </NavBar>
                    </Container>
                    {/* <button onClick={() => this.resetGame()}>Reset</button> */}
                    <DirectionsContainer>
                        <strong>Directions: </strong>Using a standard card deck (including both jokers)
                        the players shuffle the deck and lay all of the cards face down on a surface and
                        two cards are flipped face up over each turn. The object of the game is to turn
                        over pairs of matching cards.
                        </DirectionsContainer>
                    <GameContainer>
                        {cards.map((card, i) => (
                            <CardContainer key={i}>
                                <CardTemplate
                                    key={i}
                                    card={card}
                                    matched={matched}
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
}

// Styled components
const Container = styled.div`
    width: 100%;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
`;

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 1080px;
    width: 100%;
`;

const Memory = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 66%;
`;

const GameInfo = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0px 10px;
    width: 33%;
`;

const DirectionsContainer = styled.div`
    text-align: left;
    max-width: 1080px;
    margin: 0 auto;
    padding-top: 20px;
`;

const GameContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    overflow: hidden;
    max-width: 1080px;
    margin: 0 auto;
`;

const CardContainer = styled.div`
    flex: 0 1 20%;
    max-width: 100px;
    height: 140px;
    border-radius: 4px;
    margin: 20px 10px 0px 10px;
    overflow: hidden;
`;

const WinContainer = styled.div`
    display: flex;
    justify-content: center;
    font-size: 100px;
    padding-top: 30vh;
`;