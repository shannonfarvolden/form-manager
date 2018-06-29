import React from "react";
import Button from "@material-ui/core/Button";

const buttonContainer = {
  display: 'flex',
  width: '200px',
  flexWrap: 'wrap',
  justifyContent: 'center',
  paddingTop: '1em'
};
const informBtn = {
  margin: '0.25em'
};

const sidebar = {

    height: "100vh",
    float: "right",
    display:  "flex",
    justifyContent: "flex-end",
    zIndex: "1200",
    borderLeft: "1px rgba(0,0,0,0.2) solid",
    boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
};
const Testlist = [1,2,3,4,5];

const listItems = Testlist.map((list)=>
  <li>{list}</li>
);

const Sidebar = ({handleSave,handleTest}) => {

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
    <div style={sidebar}>
        <div>
            <div style={buttonContainer}>
              <Button style={informBtn} variant="raised" href="javascript:void(0)" color="primary" id="saveButton" onClick={handleSave}>Save</Button>
              <Button style={informBtn} variant="raised" href="javascript:void(0)" color="primary" id="testButton" onClick={handleTest}>test</Button>
              <Button style={informBtn} variant="raised" onClick={handlePrev} color="secondary">PREV</Button>
              <Button style={informBtn} variant="raised" onClick={handleNext} color="secondary">NEXT</Button>
            </div>
        </div>
    </div>
  );
}

export default Sidebar;
