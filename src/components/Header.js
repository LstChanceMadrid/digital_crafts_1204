import React, { Component } from 'react'
import { connect } from 'react-redux'
import Kitty from './main/Kitty'

class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          kitties: 0
        }
      }




  render() {
    let source = "http://5.mshcdn.com/wp-content/gallery/best-10-gifs-of-the-week/HoveringCats.Gif"
    
    return (
      <div className="header">
        <h1>Header</h1>
        <img src={source} />
          <button onClick={this.props.handleKittyClick}>add kitty</button>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        kitty : state.kitties
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleKittyClick: () => dispatch({type: "MORE_KITTIES", value: <Kitty />})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)