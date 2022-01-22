import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, Button, Input } from "reactstrap";

// List Item Component or Helper component main components in the down

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <ListGroupItem className="d-flex align-items-center justify-content-between">
      <Input
        type="checkbox"
        id={todo.id}
        checked={todo.isSelect}
        onChange={() => toggleSelect(todo.id)}
      />
      <div className="mx-3">
        <h4>{todo.text}</h4>
        <p>{todo.time.toDateString()}</p>
      </div>
      <Button
        className="ml-auto"
        color={todo.isComplete ? "danger" : "success"}
        onChange={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? "Completed" : "Running"}
      </Button>
    </ListGroupItem>
  );
};

//  PropTypes for ListItem
ListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};

// Main Components or List views components

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          toggleSelect={toggleSelect}
          toggleComplete={toggleComplete}
        />
      ))}
    </ListGroup>
  );
};

//  PropTypes for ListView
ListView.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};

export default ListView;
