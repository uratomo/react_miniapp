import React from "react"

export default class Timer extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props)
    this.state = { time: new Date() }
  }
  state: { time: any }
  intervalId: any

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: new Date(),
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div >
    )
  }
}
