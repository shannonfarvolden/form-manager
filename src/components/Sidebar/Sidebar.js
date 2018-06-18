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

const Sidebar = ({handleSave}) => {

  /* Maybe in the future handling prev/next
  can be a single function, pass in a page ? */

  // PREV and NEXT being handled locally, SAVE being handled in the redux

  const handlePrev = () => {
    console.log("You pressed previous!");
  }

  const handleNext = () => {
    console.log("You pressed next!");
  }

  return (
        <div >
          <Drawer
            anchor="right"
            variant="permanent">
            <div style={informBtn}>
              <Button variant="raised" color="primary" onClick={handleSave}>Save</Button>
            </div>
            <div>
              <Button style={informBtn} variant="raised" onClick={handlePrev} color="secondary">PREV</Button>
              <Button style={informBtn} variant="raised" onClick={handleNext} color="secondary">NEXT</Button>
            </div>
          </Drawer>
        </div>
  );
}

export default Sidebar;

