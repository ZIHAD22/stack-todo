import React, { Component } from "react";
import shortid from "shortid";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

// Our Custom Components
import ListView from "../listview";
import TableView from "../tableview";
import CreateTodoForm from "../create-todo-form";
import Controller from "../controllers";

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
    isOpenTodoForm: false,
    searchTerm: "",
  };

  // view Component function needed
  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;
    console.log(todo);
    this.setState({ todos });
  };
  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;
    console.log(todo);
    this.setState({ todos });
  };

  // Controller function needed
  handleSearch = () => {};

  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };

  // createTodoFrom component function needed
  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;

    const todos = [todo, ...this.state.todos];
    this.setState({
      todos,
    });
    this.toggleForm();
  };

  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Stack Todos</h1>
        <Controller
          term={this.state.searchTerm}
          toggleForm={this.toggleForm}
          handleSearch={this.handleSearch}
        />
        <TableView
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
          toggleSelect={this.toggleSelect}
        />

        <ListView
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
          toggleSelect={this.toggleSelect}
        />

        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>Create Todo Form</ModalHeader>

          <ModalBody>
            <CreateTodoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Todos;
