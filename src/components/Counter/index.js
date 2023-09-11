import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prev => {
      return {count: prev.count + 1}
    })
  }

  onDecrement = () => {
    this.setState(prev => {
      return {count: prev.count - 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading"> Counter </h1>
        <p className="count"> {count} </p>
        <div>
          <button onClick={this.onIncrement}> Increase </button>
          <button onClick={this.onDecrement}> Decrease </button>
        </div>
      </div>
    )
  }
}

export default Counter
