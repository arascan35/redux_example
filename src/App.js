import React, { Component } from "react";
import "./App.css";
import Example1 from "./Example1/Example1";
import Example2 from "./Example2/Example2";
import Example3 from "./Example3";
import { Grid } from "@material-ui/core";
import MyPaper from "./Paper";
class App extends Component {
  render() {
    return (
      <Grid container>
        <Grid container item xs>
          <Grid item xs>
            <Grid container>
              <Example1 />
              <Example2 />
              <Example3 />
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={8} container>
          <MyPaper />
        </Grid>
      </Grid>
    );
  }
}

export default App;
