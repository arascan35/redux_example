import React, { Component } from "react";
import ReactPlayer from "react-player";

class Video extends Component {
  render() {
    return (
      <ReactPlayer
        light={true}
        width={"100%"}
        height={"100%"}
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        playing
      />
    );
  }
}
export default Video;
