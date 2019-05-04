import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {

    selectLetter = (letter) => {
        this.props.selectLetter(letter)

    }

    render() {
        return (<div>
            <em>Available Letters:</em>
            <div>
                {Object.keys(this.props.letters).map(s => this.props.letters[s] === true 
                ? 
                <Letter isSelected={true} letter={s} selectLetter={this.selectLetter}/> 
                : 
                <Letter isSelected={false} letter={s}  selectLetter={this.selectLetter}/>
                )}
            </div>
        </div>)
    }
}

export default Letters