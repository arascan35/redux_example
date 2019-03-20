import React, { Component } from "react";
import Slider from "react-slick";
import { Grid, Typography } from "@material-ui/core";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MyCard from "./CardPreViewVideo";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <Grid container justify="center" alignItems="center">
            <Grid item md={12} xs={10}>
              <Slider {...settings}>
                <MyCard />
                <MyCard />
                <MyCard />
                <MyCard />
              </Slider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
