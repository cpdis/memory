import React from "react";
import ReactDOM from 'react-dom'
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import CardTemplate from './index'

describe('CARD', () => {
    const card = {
        id: 1,
        suit: 'hearts',
        value: 2,
        img: require('../../data/SVG_Cards/2_of_hearts.svg')
    }

    it("Render CardTemplate component", () => {
        const div = document.createElement("div")
        ReactDOM.render(<CardTemplate card={card} />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})