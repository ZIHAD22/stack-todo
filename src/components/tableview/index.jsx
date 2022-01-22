import { Button, CustomInput, Table } from "reactstrap";

// helper component for ____ (that i made some time leater) or rowItem
const RowItem = ({ todo, toggleSelect, toggleComplete }) => (
  <tr>
    <th scope="row">
      <CustomInput
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

// here i will add propTypes leter case i have some problem now

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

// here i will add propType in later case i have some problem now

export default TableView;
