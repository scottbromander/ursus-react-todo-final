import React, { Component } from "react";
import "./TaskListItem.css";

class TaskListItem extends Component {
  render() {
    let buttonElement = <div></div>;

    if (!this.props.item.complete) {
      buttonElement = (
        <button onClick={this.props.updateTask(this.props.item.id)}>
          Complete!
        </button>
      );
    }

    return (
      <div className="tasklistitem-task">
        <p>{this.props.item.task}</p>
        {buttonElement}
      </div>
    );
  }
}

export default TaskListItem;
