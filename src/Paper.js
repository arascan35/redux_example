import React, { Component } from "react";
import "./App.css";
import Slider from "./Slider";
import {
  Grid,
  Paper,
  Button,
  Typography,
  TextField,
  Divider
} from "@material-ui/core";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <Paper
        style={{
          margin: "20px 20px 20px 0",
          width: "100%",
          height: "90vh",
          padding: 20,
          overflowY: "auto"
        }}
      >
        <Grid container justify="space-between" style={{ height: "95%" }}>
          <Grid item md={12}>
            <Typography
              variant="h5"
              component="h3"
              style={{ paddingBottom: 10 }}
            >
              Click on any list items to remove it
            </Typography>
            <Typography component="p">Different css o same list</Typography>
            <Grid container direction="column" style={{ padding: "20px 0" }}>
              {this.props.data.map((d, index) => {
                return (
                  <TextField
                    key={index}
                    value={d.name || d.id}
                    onChange={e => this.props.onChange(e, index)}
                  />
                );
              })}
            </Grid>
            <Grid item md={4}>
              <Button variant="outlined" onClick={this.props.onAddDıffArray}>
                Change Array Structure.
              </Button>
            </Grid>

            <Divider style={{ margin: "20px 0" }} />
            <Typography>[</Typography>
            {this.props.data.map((d, index) =>
              Object.keys(d).map(o => (
                <Grid container key={index}>
                  <Grid item>
                    <Typography>{`{ ${o}`}:</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>
                      {`${this.props.data[index].id ||
                        this.props.data[index].name} },`}
                    </Typography>
                  </Grid>
                </Grid>
              ))
            )}
            <Typography>]</Typography>
          </Grid>
          <Grid container alignItems="flex-end" style={{ marginTop: 10 }}>
            <Slider />
          </Grid>
        </Grid>
      </Paper>
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
    onChange: (e, index) =>
      dispatch({ type: "OnChange", index: index, value: e.target.value }),
    onAddDıffArray: () => dispatch({ type: "PUSH_DIFF" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
