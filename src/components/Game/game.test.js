import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Game from './index'
import CardTemplate from '../CardTemplate'

describe('GAME', () => {
    it("Render Game component", () => {
        const div = document.createElement("div")
        ReactDOM.render(<Game />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it("Displays 0 matched at the start", () => {
        const component = render(<Game />)
        const matched = component.getByTestId(/matched/i)
        expect(matched).toHaveTextContent(0)
    })

    it("Displays 0 moves at the start", () => {
        const component = render(<Game />)
        const moves = component.getByTestId(/moves/i)
        expect(moves).toHaveTextContent(0)
    })

    it("Display 0 moves when same card is clicked twice", () => {
        const card1 = {
            id: 1,
            suit: 'hearts',
            value: 2,
            img: require('../../data/SVG_Cards/2_of_hearts.svg')
        }

        const cardComponent = render(<CardTemplate card={card1} />)
        const cardButton = cardComponent.getByTestId("button")
        fireEvent.click(cardButton)
        fireEvent.click(cardButton)
        const gameComponent = render(<Game />)
        const moves = gameComponent.getByTestId(/moves/i)
        expect(moves).toHaveTextContent("Moves: 0")
    })
})