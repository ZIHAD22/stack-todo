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
    view: "list",
    filter: "all",
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
  handleSearch = (value) => {
    this.setState(
      {
        searchTerm: value,
      },
      () => console.log(this.state.searchTerm)
    );
  };

  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };

  handleFilter = (filter) => {
    this.setState({ filter });
  };

  changeView = (event) => {
    this.setState({
      view: event.target.value,
    });
  };

  reset = () => {
    this.setState({
      filter: "all",
      searchTerm: "",
      view: "list",
      isOpenTodoForm: false,
    });
  };

  clearSelected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelect);
    this.setState({ todos });
  };

  clearCompleted = () => {
    const todos = this.state.todos.filter((todo) => !todo.isComplete);
    this.setState({ todos });
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

  // generat view of app
  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === "list" ? (
      <ListView
        todos={todos}
        toggleComplete={this.toggleComplete}
        toggleSelect={this.toggleSelect}
      />
    ) : (
      <TableView
        todos={todos}
        toggleComplete={this.toggleComplete}
        toggleSelect={this.toggleSelect}
      />
    );
  };

  // searchterm
  performSearch = () => {
    return this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  // perfom filter
  performFilter = (todos) => {
    const { filter } = this.state;
    if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    } else if (filter === "running") {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };

  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Stack Todos</h1>
        <Controller
          term={this.state.searchTerm}
          view={this.state.view}
          toggleForm={this.toggleForm}
          handleSearch={this.handleSearch}
          handleFilter={this.handleFilter}
          clearCompleted={this.clearCompleted}
          clearSelected={this.clearSelected}
          reset={this.reset}
          changeView={this.changeView}
        />

        <div>{this.getView()}</div>

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
