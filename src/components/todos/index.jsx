import React, { Component } from "react";
import ListView from "../listview";
import TableView from "../tableview";

class Todos extends Component {
  state = {
    todos: [
      {
        id: "sdshdish7",
        text: "Main text of todo 1",
        description: "This is a simple desc for todo 1",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "sdshdish7ewe11212",
        text: "Main text of todo 2",
        description: "This is a simple desc for todo 1",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
  };

  toggleComplete = (todoId) => console.log(todoId);

  toggleSelect = (todoId) => console.log(todoId);

  render() {
    return (
      <div>
        <ListView
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
          toggleSelect={this.toggleSelect}
        />
        <TableView
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
          toggleSelect={this.toggleSelect}
        />
      </div>
    );
  }
}

export default Todos;
