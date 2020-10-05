import React from "react"


type FileWrapperState = {
  img_src: any
}

export default class FileWrapper extends React.Component<{}, FileWrapperState>{
  constructor(props: {}) {
    super(props)
    this.state = { img_src: null }
  }

  handleFileInput = (e: any): void => {
    var file = e.target.files[0]
    console.log(e.target.result)
    const reader = new FileReader();

    // reader.onload = (e) => {
    //   this.setState({ img_src: e.target.result })
    // }
    reader.readAsDataURL(file)

  }

  renderThumbnail(e: any) {
    return (
      <div>{this.state.img_src}</div>
    )
  }

  render() {
    return (
      <div>
        <input type="file" accept="image/*" onChange={(e) => { this.handleFileInput(e) }} />
        <div>{this.renderThumbnail}</div>
      </div>
    )
  }
}
