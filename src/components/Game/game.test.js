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
})