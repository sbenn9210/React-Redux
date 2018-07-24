import React, {Component} from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  constructor(props) {
    super(props)

  }



  render() {

    let counterHistoryItems = this.props.results.map((ctr) => {
      return (
        <li>{ctr}</li>
      )
    })


    return (
      <div>
        <h1>{this.props.ctr}</h1>
        <button onClick={this.props.onIncrementCounter}>INCREMENT</button>
        <button onClick={this.props.onDecrementCounter}>DECREMENT</button>
        <button onClick={this.props.onSaveHistory}>SAVE HISTORY</button>

        <ul>
          {counterHistoryItems}
        </ul>
      </div>

    )
  }



}

//map state to the properties
const mapStateToProps = (state) => {
  return {
    ctr : state.counter,
    results : state.counterHistory
  }
}

// Dispatch are actions which are dispatched due to some event
// on the screen. This can be a button click event.
// The type property on dispatch object is required and it allows to distinguish
// between different dispatches.
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter : () => dispatch({type : "INCREMENT_COUNTER"}),
    onDecrementCounter : () => dispatch({type : "DECREMENT_COUNTER"}),
    onSaveHistory : () => dispatch({type : "SAVE_HISTORY"})

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
