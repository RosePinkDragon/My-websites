import {
  Button,
  List,
  ListItem,
  ListItemText,
  Modal,
  Input,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState } from "react";
import db from "./firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "10%",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "0px",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ToDo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );

    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>Hello You can edit here</h1>
          <Input
            placeholder={props.todo.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={updateTodo}>Done</Button>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemText
            primary={props.todo.todo}
            secondary="Deadline: Dummy ⏰ "
          />
        </ListItem>

        <Button onClick={(e) => setOpen(true)}>Edit</Button>

        <Button
          variant="contained"
          color="secondary"
          // className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={(e) => db.collection("todos").doc(props.todo.id).delete()}
        >
          Delete ⚔️
        </Button>
      </List>
    </>
  );
}

export default ToDo;
