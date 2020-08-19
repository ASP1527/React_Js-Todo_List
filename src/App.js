import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import { db } from "./firebase";
import firebase from "firebase";

//main function
function App() {
  //local list if todos
  const [todos, setTodos] = useState([]);
  //clears the input field
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  //function that adds a todo and then clears the input field
  const addTodo = (event) => {
    event.preventDefault();
    //... means all of the items in the list/ spreads out the items in the list

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <h1 style={{ color: "#3f51b5" }}>Todo List</h1>
      <form>
        <FormControl>
          <InputLabel>Write Todo Here:</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add ToDo
        </Button>
      </form>

      <ul style={{ color: "#3f51b5" }}>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
