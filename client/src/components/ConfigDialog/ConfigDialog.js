import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogTitle";


import List from "@material-ui/core/List";
//import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import SelectConfig from "../SelectConfig";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
//import TextField from '@material-ui/core/TextField';
import Tab from  '@material-ui/core/Tab';
import Tabs from  '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import ConfigDisplay from '../ConfigDisplay';
import ConfigLayout from '../ConfigLayout';
import ConfigFuture from '../ConfigFuture';


import { withStyles } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";



const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
};

//const ConfigDialog = ({fieldId, field, dialogCancel, dialogConfirm}) => {


class ConfigDialog extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newField: {},
      configOptions: [],
      tabId: 0
    };
  }

  componentDidMount() {

    // Define all possible configs for a field
    const configOptionsValue = [
      // Layout
      { key: "top", editable: false, active: true, value: '' },
      { key: "left", editable: false, active: true, value: '' },
      { key: "width", editable: false, active: true, value: '' },
      { key: "height", editable: false, active: true, value: '' },
      { key: "type", editable: false, active: true, value: '' },
      // Curretly editable
      { key: "mandatory", editable: true, active: true, value: '' },
      { key: "disabled", editable: true, active: true, value: '' },
      { key: "defaultValue", editable: true, active: true, value: '' },
      // Future editable 
      { key: "populate", editable: false, active: false, value: '' },
      { key: "mask", editable: false, active: false },
      { key: "newForm", editable: false, active: false, value: '' }
    ]
    
    // Define the local newConfigs that will be updated if pressed 'Confirm'
    let fieldValue = {};
    configOptionsValue.forEach(item => {
      if (item.active) fieldValue[item.key] = this.props.field[item.key] || null;
    })

    this.setState({
      newField: fieldValue,
      configOptions: configOptionsValue
    })
  }

  handleConfirm = event => {
    event.preventDefault();
    let fieldValue = {...this.state.newField}
    Object.keys(fieldValue).forEach(key => {
      if (!fieldValue[key]) delete fieldValue[key]
    });
    this.props.dialogConfirm(fieldValue)
  };


  handleTabChange = (event, value) => {
    this.setState({ tabId: value });
  };


  handleTexboxChange = event => {
    let newFieldValue = this.state.newField;
    newFieldValue[event.target.name] = event.target.value
    this.setState({newField: newFieldValue});
  };

  handleCheckboxChange = name => {
    let newFieldValue = this.state.newField;
    newFieldValue[name] = !this.state.newField[name]
    this.setState({newField: newFieldValue});
  }

  render = () => { 

  return (

    <Dialog
      fullWidth
      aria-labelledby="simple-dialog-title"
      open={!!this.props.fieldId} 
    >
      <DialogTitle id="simple-dialog-title">Field: {this.props.fieldId ? this.props.fieldId : ''}</DialogTitle>
        <DialogContent>
      {/* 
        <SelectConfig
          fields={
            this.state.configOptions
              .filter(item => item.editable)
              .map(item => ({
                value: item.key,
                label: item.key
              }))
          }
          placeholder="Config"
          title="Config type"
        /> */}
        {/*<List>
          {Object.keys(this.state.newField)
            .filter(key => this.state.newField[key] !== '')
            .map(key => (
            <ListItem
              button
              key={key}
            >
              <ListItemText primary={`${key} = ${this.state.newField[key]}`}/>
            </ListItem>
          ))}
        </List>
        */}
        <AppBar position="static">
          <Tabs
            value={this.state.tabId}
            onChange={this.handleTabChange}
          >
            <Tab label="Display" href="#Display" />
            <Tab label="Layout" href="#Layout" />
            <Tab label="Future" href="#Future" />
          </Tabs>
        </AppBar>
        {this.state.tabId === 0 &&
        <ConfigDisplay
          newField={this.state.newField}
          handleTexboxChange={e => this.handleTexboxChange(e)}
          handleCheckboxChange={name => this.handleCheckboxChange(name)}
        />}
        {this.state.tabId === 1 &&
        <ConfigLayout
          newField={this.state.newField}
          handleTexboxChange={e => this.handleTexboxChange(e)}
        />}
        {this.state.tabId === 2 &&
        <ConfigFuture
          newField={this.state.newField}
          handleTexboxChange={e => this.handleTexboxChange(e)}
        />}
      </DialogContent>
      <DialogActions>
        <Button onClick={this.props.dialogCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={this.handleConfirm} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
  }
}


export default withStyles(styles)(ConfigDialog);
