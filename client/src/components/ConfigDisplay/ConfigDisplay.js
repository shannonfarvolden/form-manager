import React from "react";

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from '@material-ui/core/TextField'

const ConfigDisplay = ({newField, handleTexboxChange, handleCheckboxChange}) => {

  return (
    <List>
        <ListItem key='1'>
          <TextField
            label="Default"
            name="defaultValue"
            value={newField.defaultValue}
            onChange={e => handleTexboxChange(e)}
            margin="normal"
          />
        </ListItem>
        <ListItem key='2'>
          <FormControlLabel
            control={
              <Checkbox
                name="disabled"
                checked={newField.disabled}
                onChange={() => handleCheckboxChange('disabled')}
                value={'disabled'}
              />
            }
            label="Disabled"
          />
        </ListItem>
        <ListItem key='3'>
          <FormControlLabel
            control={
              <Checkbox
                name="mandatory"
                checked={newField.mandatory}
                onChange={() => handleCheckboxChange('mandatory')}
                value={'mandatory'}
              />
            }
            label="Mandatory"
          />
          </ListItem>
          <ListItem key='4'>
          <TextField
            label="Valid"
            name="valid"
            value={newField.valid}
            onChange={e => handleTexboxChange(e)}
            margin="normal"
            style={{
              width: '900px'
            }}
          />
        </ListItem>
    </List>
  )
}

export default ConfigDisplay;
