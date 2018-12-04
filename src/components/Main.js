import React, { Component } from 'react'
import { connect } from 'react-redux';

class Main extends Component {

  render() {
    return (
      <div>
          <h1>Main</h1>
        {this.props.myKitties}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        myKitties : state.kitties
    }
}

export default connect(mapStateToProps)(Main)