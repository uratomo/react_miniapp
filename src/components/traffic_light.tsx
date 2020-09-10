import React from "react"
import "./traffic_light.css"

type TrafficLightState = {
  light: "green" | "yellow" | "red" | undefined
}
export default class TrafficLight extends React.Component<{}, TrafficLightState> {
  constructor(props: {}) {
    super(props)
    this.state = { light: "green" }
  }

  componentDidMount() {
    const changeColor = (): "green" | "yellow" | "red" | undefined => {
      switch (this.state.light) {
        case "green":
          return "yellow"
          break;
        case "yellow":
          return "red"
          break;
        case "red":
          return "green"
          break;
      }
    }
    setInterval(() => {
      this.setState({
        light: changeColor()
      })

      this.setState({

      })
    }, 1000)
  }
  componentWillUnmount() {

  }



  render() {
    const lightStyle = {
      backgroundColor: this.state.light
    }
    return (
      <div className="flex" >
        <div className="lightbox" style={lightStyle}></div>
        <div className="lightbox" style={lightStyle}></div>
        <div className="lightbox" style={lightStyle}></div>
      </div >
    )
  }
}
