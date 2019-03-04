import React, { Component } from 'react'
import shuffle from '../../utils/shuffle'

export default class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: '',
            matched: [],
            selected: []
        }
    }

    selectHandler = (index) => {

    }

    render() {
        const { cards, matched, selected } = this.state;

        return (
            <div>
                <p>Game</p>
            </div>
        )
    }
}
