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

    it("Has correct height and width", () => {
        const component = render(<CardTemplate card={card} />)
        const img = component.getByAltText("hearts")
        expect(img).toHaveStyle(`
            width: 100px;
            height: 140px;
        `)
    })
})