import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import TaskList from "../TaskList/TaskList";

class App extends Component {
  state = {
    taskList: [],
  };

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    axios
      .get("/tasks")
      .then((response) => {
        this.setState(
          {
            taskList: response.data,
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch((err) => console.warn(err));
  }

  updateTask = (id) => (event) => {
    console.log(id);
    axios
      .put(`/tasks/complete/${id}`)
      .then((response) => {
        this.getTasks();
      })
      .catch((err) => console.warn(err));
  };

  render() {
    return (
      <div className="App">
        <h1>Tasks</h1>
        <TaskList taskList={this.state.taskList} updateTask={this.updateTask} />
      </div>
    );
  }
}

export default App;
