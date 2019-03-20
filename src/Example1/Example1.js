import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as actionCreator from "../store/actions/action";
import CircularProgress from "@material-ui/core/CircularProgress";

class App extends Component {
  render() {
    console.log("1", this.props);
    return (
      <div
        className="paper"
        style={{
          margin: "20px 20px 0 20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <span style={{ textAlign: "center", color: "black", marginBottom: 20 }}>
          Basic Redux Example -1
        </span>
        <label
          style={{ color: "black", marginBottom: 20, textAlign: "center" }}
        >
          {this.props.ageA}
        </label>
        <div
          className="App"
          style={{
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          {this.props.loading ? (
            <CircularProgress />
          ) : (
            <button onClick={this.props.onAgeUp}>Up</button>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ageA: state.r1.ageA,
    loading: state.r1.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch(actionCreator.ageUp(1))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
