import React, { Component } from "react"
import Header from "../components/header"
import Image from "../components/image"

class Homepage extends Component {
  render() {

    return (
      <div style={{
        maxWidth: 1000,
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        <Header />

        <h1>Posts</h1>
        <Image
          alt="image"
          filename="Simulator_Screen_Shot_-_iPhone_11_-_2020-06-01_at_10.59.10_218f9d6e52.png"
          width={280}
        />
        <Image
          alt="image"
          filename="Screenshot_20200601-113635_weather_b408fb9b08.jpg"
          width={280}
        />
      </div>
    )
  }
}

export default Homepage
