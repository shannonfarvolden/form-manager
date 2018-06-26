import React from "react";

import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogTitle";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
import SelectConfig from "../SelectConfig";
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'

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
      configOptions: []
    };
  }

  componentDidMount() {

    // Define all possible configs for a field
    const configOptionsValue = [
      // Presentation
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
    
    // Define the, for now temporary, new configs that will be updated if pressed 'Confirm'
    console.log('nf=',this.state.newField)
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

  handleFieldCheck = name => event => {
    let newFieldValue = this.state.newField;
    newFieldValue[name] = !this.state.newField[name]
    this.setState({newField: newFieldValue});
  }

  // handleFieldChange = name => e => {
  //   let newFieldValue = this.state.newField;
  //   newFieldValue[name] = !this.state.newField[name]
  //   this.setState({newField: newFieldValue});
  // }

  handleFieldChange = name => event => {
    let newFieldValue = this.state.newField;
    newFieldValue[name] = event.target.value
    this.setState({newField: newFieldValue});
  };

  render = () => { 

  return (

    <Dialog
      fullWidth
      aria-labelledby="simple-dialog-title"
      open={!!this.props.fieldId} 
    >
      <DialogTitle id="simple-dialog-title">Add Config To Field {this.props.fieldId ? this.props.fieldId : ''} from page </DialogTitle>
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
        <List>
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
        <ListItem key='98'>
          <TextField
            id="defaultValue"
            label="Default"
            value={this.state.newField.defaultValue}
            onChange={this.handleFieldChange('defaultValue')}
            margin="normal"
          />
        </ListItem>
        <ListItem key='99'>
          <FormControlLabel
            control={
              <Checkbox
                checked={!!this.state.newField.disabled}
                onChange={this.handleFieldCheck('disabled')}
                value={'disabled'}
              />
            }
            label="Disabled"
          />
        </ListItem>
        <ListItem key='100'>
          <FormControlLabel
            control={
              <Checkbox
                checked={!!this.state.newField.mandatory}
                onChange={this.handleFieldCheck('mandatory')}
                value={'mandatory'}
              />
            }
            label="Mandatory"
          />
          </ListItem>
        </List>
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
