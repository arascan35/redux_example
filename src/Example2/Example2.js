import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as actionCreator from "../store/actions/action";
import Delete from "@material-ui/icons/DeleteOutlined";
import { Grid } from "@material-ui/core";

class App extends Component {
  render() {
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
          Basic Redux Example -2
        </span>
        <label
          style={{ color: "black", marginBottom: 20, textAlign: "center" }}
        >
          {this.props.ageB}
        </label>
        <div
          className="App"
          style={{
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <button onClick={this.props.onAgeDown}>Down</button>
        </div>
        {this.props.data.length > 0 && (
          <div style={{ maxHeight: 100, marginTop: 20, overflow: "auto" }}>
            <ul>
              {this.props.data.map((d, index) => (
                <li
                  key={index}
                  style={{ padding: "10px 20px", margin: "0px 5px" }}
                  onClick={() => this.props.onPop(d)}
                >
                  <Grid container justify="space-between">
                    <Grid item>{d.name || d.id} </Grid>
                    <Grid item>
                      <Delete style={{ color: "white" }} />
                    </Grid>
                  </Grid>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ageB: state.r2.ageB,
    data: state.r3.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAgeDown: () => dispatch(actionCreator.ageDown(1)),
    onPop: d => dispatch({ type: "POP", obj: d })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
