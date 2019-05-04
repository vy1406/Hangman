import React, {Component} from 'react'

class Score extends Component{
    getClassByScore = () => {
        let result = "high-score"
        if (this.props.score < 80)
          if (this.props.score > 50) {
            result = "medium-score"
          }
          else {
            result = "low-score"
          }
        return result
      }
    render(){
        return (
            <div className={this.getClassByScore()}>{this.props.score}</div>
        )
    }
}

export default Score