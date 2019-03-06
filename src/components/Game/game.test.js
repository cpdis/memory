import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Game from './index'

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
})