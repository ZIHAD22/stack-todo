import PropTypes from "prop-types";
import { Label, Input } from "reactstrap";

// main component
const ViewController = ({ view, changeView }) => (
  <div className="d-flex">
    <Label for="list-view" className="me-4">
      <Input
        type="radio"
        name="view"
        value="list"
        id="list-view"
        onChange={(e) => changeView(e)}
        className="d-inline-block"
        checked={view === "list"}
      />{" "}
      List View
    </Label>
    <Label for="table-view" className="me-4">
      <Input
        type="radio"
        name="view"
        value="table"
        id="table-view"
        onChange={(e) => changeView(e)}
        className="d-inline-block"
        checked={view === "table"}
      />
      Table View
    </Label>
  </div>
);

// propTypes for ViewController
ViewController.propTypes = {
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
};

export default ViewController;
