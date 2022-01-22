import { ListGroup, ListGroupItem, CustomInput, Button } from "reactstrap";

// List Item Component or Helper component main components in the down

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <ListGroupItem className="d-flex align-items-center ">
      <CustomInput
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

// leater i will add propTypes now i have in a problem

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

// Here i will add propTypes in laters case i have a problem now

export default ListView;
