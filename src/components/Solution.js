import React, { Component } from 'react'
import Letter from './Letter'
class Solution extends Component {

    render() {
        let arr = this.props.solution.word.split("")

        return (
            <div>
                {arr.map(s => this.props.letters[s] === true ? <Letter letter={s} /> : <Letter letter="_" />)}
                <div>
                    <em>{this.props.solution.hint}</em>
                </div>
            </div>
        )
    }
}

export default Solution