import PropTypes from "prop-types";
import { Button, Input, Table } from "reactstrap";

// helper component for ____ (that i made some time leater) or rowItem
const RowItem = ({ todo, toggleSelect, toggleComplete }) => (
  <tr>
    <td>
      <Input
        type="checkbox"
        id={todo.id}
        checked={todo.isSelect}
        onChange={() => toggleSelect(todo.id)}
      />
    </td>
    <td>{todo.text}</td>
    <td>{todo.time.toDateString()}</td>
    <td>
      <Button
        color={todo.isComplete ? "danger" : "success"}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? "Completed" : "Running"}
      </Button>
    </td>
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
      <tr>
        <th>#</th>
        <th>Time</th>
        <th>Todo</th>
        <th>Action</th>
      </tr>
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
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};

export default TableView;
