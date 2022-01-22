import PropTypes from "prop-types";
import { ButtonGroup, Button } from "reactstrap";

const BulkController = ({ clearSelected, clearCompleted, reset }) => (
  <ButtonGroup>
    <Button color="danger" className="shadow-none" onClick={clearSelected}>
      Clear Selected
    </Button>
    <Button color="danger" className="shadow-none" onClick={clearCompleted}>
      Clear Completed
    </Button>
    <Button color="danger" className="shadow-none" onClick={reset}>
      Reset
    </Button>
  </ButtonGroup>
);

// proptypes of filterController
BulkController.propTypes = {
  clearSelected: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default BulkController;
