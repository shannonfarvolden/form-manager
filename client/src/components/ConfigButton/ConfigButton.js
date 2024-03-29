import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";

import ConfigDialog from "../ConfigDialog";

class ConfigButton extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = value => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Tooltip id="tooltip-fab" title="Add New Config">
          <Button
            variant="fab"
            color="primary"
            aria-label="Add New Config"
            onClick={this.handleClickOpen}
          >
            <AddIcon />
          </Button>
        </Tooltip>
        <ConfigDialog
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default ConfigButton;
