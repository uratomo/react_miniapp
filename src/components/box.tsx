import React from "react"
import "./box.css"

type BoxState = {
  blocks: number
}

export default class Box extends React.Component<{}, BoxState>{
  constructor(props: {}) {
    super(props)
    this.state = { blocks: 0 }
  }

  addSquareBlock = () => {
    this.setState({ blocks: this.state.blocks + 1 })
  }
  renderSquareBlock = (i: number): any => {
    for (let step: number = 0; step < i; step++) {
      return (
        <SquareBlock />
      )
    }
  }

  render() {
    const blocks = this.state.blocks
    return (
      <div>
        <button onClick={this.addSquareBlock}>ボタン押してね！</button>
        <div>{this.renderSquareBlock(blocks)}</div>
      </div>
    )
  }
}

class SquareBlock extends React.Component<{}, {}>{
  render() {
    return (
      <div className="square">
        <p>押したよ！</p>
      </div>
    )
  }
}
