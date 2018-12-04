import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class Kitty extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          kitties: 0
        }
      }




  render() {
    let source = "http://5.mshcdn.com/wp-content/gallery/best-10-gifs-of-the-week/HoveringCats.Gif"
    
    return (
      <div>
        <h1>fat cats !!</h1>
        <img src={source} />

      </div>
    )
  }
}
