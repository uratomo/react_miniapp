import React from "react"
import "./counter.css"

type CounterState = {
  count: number
}


export default class Counter extends React.Component<{}, CounterState> {
  constructor(props: {}) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusCount = (): void => {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusCount = (): void => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div className="couner_wrap">
        <p>カウントアップ</p>
        <div className="flex">
          <div>{this.state.count}</div>
          <button onClick={this.handlePlusCount}>+</button>
          <button onClick={this.handleMinusCount}>-</button>
        </div>
      </div>
    )
  }
}
