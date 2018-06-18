import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const informBtn = {
  margin: "5px"
};

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* Maybe in the future handling prev/next
  can be a single function, pass in a page ? */
  handlePrev() {
    let that = this;
    console.log("You pressed previous!");
    console.log(that);
  }

  handleNext() {
    let that = this;
    console.log("You pressed next!");
    console.log(that);
  }

  handleSubmit() {
    let that = this;
    console.log("You pressed submit!");
    console.log(that);
  }

  render() {
    return (
      // <Router>
        <div >
          <Drawer
            anchor="right"
            variant="permanent">
            <div style={informBtn}>
              <Button variant="raised" color="primary" onClick={this.handleSubmit}>
                Submit
              </Button>
            </div>
            <div>
              <Button style={informBtn} variant="raised" onClick={this.handlePrev} color="secondary">PREV</Button>
              <Button style={informBtn} variant="raised" onClick={this.handleNext} color="secondary">NEXT</Button>
            </div>
          </Drawer>
        </div>
      // </Router>
    );
  }
}
