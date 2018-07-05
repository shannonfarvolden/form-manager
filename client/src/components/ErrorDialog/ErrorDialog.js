import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
//import SnackbarContent from "@material-ui/core/SnackbarContent";
import Slide from "@material-ui/core/Slide";

class ErrorDialog extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      open: false,
      errorMessage: this.props.errorMessage || ""
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose = () => {
    this.setState({open: false});
    this.setState({errorMessage: ""});
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({errorMessage: nextProps.errorMessage}, () => {
      if(this.state.errorMessage)
        this.setState({open: true});
    });

  };

  render = () => {
    return(
      <Snackbar
        open={this.state.open}
        onClose={this.handleClose}
        autoHideDuration={5000}
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        message={<span>{this.props.errorMessage}</span>}
      />
    );
  }

}

export default ErrorDialog;
