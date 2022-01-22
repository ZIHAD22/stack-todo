import PropTypes from "prop-types";
import { ButtonGroup, Button } from "reactstrap";

const FillterController = ({ handleFilter }) => (
  <ButtonGroup>
    <Button className="shadow-none" onClick={() => handleFilter("all")}>All</Button>
    <Button className="shadow-none" onClick={() => handleFilter("running")}>Running</Button>
    <Button className="shadow-none" onClick={() => handleFilter("completed")}>Completed</Button>
  </ButtonGroup>
);

// proptypes of filterController
FillterController.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FillterController;
