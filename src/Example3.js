import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Delete from "@material-ui/icons/DeleteOutlined";

class App extends Component {
  render() {
    console.log(this.props.data);
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
        <span style={{ textAlign: "center", color: "black", marginBottom: 10 }}>
          Basic Redux Example -3
        </span>
        <label
          style={{ color: "black", marginBottom: 50, textAlign: "center" }}
        >
          Press push to added JSON object into redux.
        </label>
        <div
          className="App"
          style={{
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <div>
            <button onClick={this.props.onPush}>Push</button>
          </div>
        </div>
        {this.props.data.length > 0 && (
          <div style={{ maxHeight: 100, marginTop: 20, overflow: "auto" }}>
            <ul>
              {this.props.data.map((d, index) => (
                <li
                  style={{ padding: "10px 20px", margin: "0px 5px" }}
                  key={index}
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
    data: state.r3.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onPush: () => dispatch({ type: "PUSH", data: { name: Math.random() } }),
    onPop: d => dispatch({ type: "POP", obj: d })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
