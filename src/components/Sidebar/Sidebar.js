import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const buttonContainer = {
  display: 'flex',
  width: '200px',
  flexWrap: 'wrap',
  justifyContent: 'center'
};
const informBtn = {
  margin: '0.25em'
};
const Testlist = [1,2,3,4,5];

const listItems = Testlist.map((list)=>
  <li>{list}</li>
);

const Sidebar = ({handleSave, handleTest}) => {

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
        // <div >
          <Drawer
            anchor="right"
            variant="permanent">
            <div style={buttonContainer}>
              <Button style={informBtn} variant="raised" href="javascript:void(0)" color="primary" id="saveButton" onClick={handleSave}>Save</Button>
              <Button style={informBtn} variant="raised" href="javascript:void(0)" color="primary" id="testButton" onClick={handleTest}>test</Button>
              <Button style={informBtn} variant="raised" onClick={handlePrev} color="secondary">PREV</Button>
              <Button style={informBtn} variant="raised" onClick={handleNext} color="secondary">NEXT</Button>
            </div>
            <ul>{listItems}</ul>
          </Drawer>
        // </div>
  );
}

export default Sidebar;

