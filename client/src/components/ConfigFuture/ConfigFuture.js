import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from '@material-ui/core/TextField'

const ConfigFuture = ({newField, handleTexboxChange}) => {

  console.log('newField=', newField)

  return (
    <List>
        <ListItem key='1'>
          <TextField
            label="populate"
            name="populate"
            value={newField.populate}
            onChange={e => handleTexboxChange(e)}
            disabled={true}
          />
        </ListItem>
        <ListItem key='2'>
          <TextField
            label="mask"
            name="mask"
            value={newField.mask}
            onChange={e => handleTexboxChange(e)}
            disabled={true}
          />
        </ListItem>
        <ListItem key='3'>
          <TextField
            label="newForm"
            name="newForm"
            value={newField.newForm}
            onChange={e => handleTexboxChange(e)}
            disabled={true}
          />
        </ListItem>
        <ListItem key='4'>
          <TextField
            label="type"
            name="type"
            value="text"
            onChange={e => handleTexboxChange(e)}
            disabled={true}
          />
        </ListItem>
    </List>
  )
}

export default ConfigFuture;