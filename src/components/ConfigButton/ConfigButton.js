import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';

import ConfigDialog from '../ConfigDialog';

const configOptions = ["mandatory", "disabled", "populate", "newForm"];

class ConfigButton extends React.Component {
    state = {
      open: false,
      selectedValue: configOptions[0]
    };
    
  
    handleClickOpen = () => {
      this.setState({
        open: true
      });
    };
  
    handleClose = value => {
      this.setState({ selectedValue: value, open: false });
    };
  
    render() {
      return (
        <div>
          <Typography variant="subheading">
            Selected: {this.state.selectedValue}
          </Typography>
          <br />
          <Button variant="contained" color="primary" onClick={this.handleClickOpen}>Add Config</Button>
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