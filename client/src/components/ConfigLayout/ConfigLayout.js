import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from '@material-ui/core/TextField'

const ConfigLayout = ({newField, handleTexboxChange}) => {

  console.log('newField=', newField)

  return (
    <List>
        <ListItem key='1'>
          <TextField
            label="top"
            name="top"
            value={newField.top}
            onChange={e => handleTexboxChange(e)}
          />
        </ListItem>
        <ListItem key='2'>
          <TextField
            label="left"
            name="left"
            value={newField.left}
            onChange={e => handleTexboxChange(e)}
          />
        </ListItem>
        <ListItem key='3'>
          <TextField
            label="width"
            name="width"
            value={newField.width}
            onChange={e => handleTexboxChange(e)}
          />
        </ListItem>
        <ListItem key='4'>
          <TextField
            label="height"
            name="height"
            value={newField.height}
            onChange={e => handleTexboxChange(e)}
          />
        </ListItem>
        <ListItem key='5'>
          <TextField
            label="type"
            name="type"
            value={'text'}
            disabled={true}
          />
        </ListItem>
    </List>
  )
}

export default ConfigLayout;