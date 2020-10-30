import { List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'

function ToDo(props) {
   
    return (
        <List>
        <ListItem>
            <ListItemText primary={props.text} secondary="Deadline: Dummy ⏰ "/>
          </ListItem>
        </List>
    )
}

export default ToDo
