import PropTypes from "prop-types";
import { Button, Input, Table } from "reactstrap";

// helper component for ____ (that i made some time leater) or rowItem
const RowItem = ({ todo, toggleSelect, toggleComplete }) => (
  <tr>
    <th scope="row">
      <Input
        type="checkbox"
        id={todo.id}
        checked={todo.isSelect}
        onChange={() => toggleSelect(todo.id)}
      />
    </th>
    <th>{todo.time.toDateString()}</th>
    <th>{todo.text}</th>
    <th>
      <Button
        color={todo.isComplete ? "danger" : "success"}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? "Completed" : "Running"}
      </Button>
    </th>
  </tr>
);

// PropTypes for RowItem
RowItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};

// Main component of this file or tableview
const TableView = ({ todos, toggleComplete, toggleSelect }) => (
  <Table>
    <thead>
      <th>#</th>
      <th>Time</th>
      <th>Todo</th>
      <th>Action</th>
    </thead>
    <tbody>
      {todos.map((todo) => (
        <RowItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          toggleSelect={toggleSelect}
        />
      ))}
    </tbody>
  </Table>
);

// PropTypes for TableView
TableView.propTypes = {
  todos: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};

export default TableView;
