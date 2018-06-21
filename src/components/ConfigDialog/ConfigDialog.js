import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import blue from "@material-ui/core/colors/blue";

import SelectConfig from "../SelectConfig";

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
};

const fields = [
  { label: "Field 1" },
  { label: "Field 2" },
  { label: "Field 3" },
  { label: "Field 4" },
  { label: "Field 5" },
  { label: "Field 6" },
  { label: "Field 7" },
  { label: "Field 8" }
].map(field => ({
  value: field.label,
  label: field.label
}));
const configOptions = [
  { label: "mandatory" },
  { label: "disabled" },
  { label: "populate" },
  { label: "mask" },
  { label: "newForm" }
].map(field => ({
  value: field.label,
  label: field.label
}));

class ConfigDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog
        fullWidth
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogTitle id="simple-dialog-title">Add Config To Field</DialogTitle>
        <div>
          <SelectConfig
            fields={configOptions}
            placeholder="Config"
            title="Config type"
          />
          <SelectConfig
            fields={fields}
            placeholder="Select Field(s)"
            title="On Field"
          />
          {/* <List>
            {configOptions.map(config => (
              <ListItem
                button
                onClick={() => this.handleListItemClick(config)}
                key={config}
              >
                <ListItemText primary={config} />
              </ListItem>
            ))}
          </List> */}
        </div>
      </Dialog>
    );
  }
}

ConfigDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
};

export default withStyles(styles)(ConfigDialog);
