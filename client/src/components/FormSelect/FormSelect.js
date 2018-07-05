/* eslint-disable react/no-multi-comp */

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";
import { connect } from "react-redux";
import { loadConfig, fetchForms } from "../../redux/modules/formConfig";

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
};

class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, formList, ...other } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogTitle id="simple-dialog-title">Select Form To Load</DialogTitle>
        <div>
          <List>
            {formList.map(form => (
              <ListItem
                button
                onClick={() => this.handleListItemClick(form._id)}
                key={form._id}
              >
                <ListItemText
                  primary={form.title}
                  secondary={form.createdDate}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

class FormSelect extends React.Component {
  componentDidMount() {
    this.props.fetchForms();
  }
  state = {
    open: false,
    selectedValue: ""
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = id => {
    this.setState({ selectedValue: id, open: false });
    this.props.loadConfig(id);
  };

  render() {
    return (
      <div>
        <Button
          color="primary"
          variant="raised"
          style={{ margin: "0.25em" }}
          onClick={this.handleClickOpen}
        >
          Select Config To Load
        </Button>
        <SimpleDialogWrapped
          formList={this.props.formList}
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    formList: state.formConfig.formList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadConfig: id => dispatch(loadConfig(id)),
    fetchForms: () => dispatch(fetchForms())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSelect);
