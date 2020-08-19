import React, { useState } from "react";
import "./Todo.css";
import { db } from "./firebase";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
  Modal,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <Modal
        style={{ color: "#3f51b5" }}
        open={open}
        onClose={(e) => setOpen(false)}
      >
        <div className={classes.paper}>
          <h1>Edit Todo</h1>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={updateTodo} disabled={!input}>
            Update Todo
          </Button>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary="Not Done" />
          </ListItemAvatar>
        </ListItem>
        <EditIcon style={{ color: "#3f51b5" }} onClick={(e) => setOpen(true)} />
        <DeleteIcon
          style={{ color: "#3f51b5" }}
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List>
    </>
  );
}

export default Todo;
