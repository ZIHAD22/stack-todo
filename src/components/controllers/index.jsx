import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

// our Custom Components
import SearchPanel from "./search-panel";
import FillterController from "./fillter-controller";
import BulkController from "./bulk-controller";
import ViewController from "./view-controller";

// main Component
const Controller = ({
  term,
  view,
  changeView,
  handleSearch,
  toggleForm,
  handleFilter,
  clearCompleted,
  clearSelected,
  reset,
}) => (
  <div>
    <SearchPanel
      term={term}
      handleSearch={handleSearch}
      toggleForm={toggleForm}
    />
    <Row className="my-4">
      <Col md={{ size: 4 }}>
        <FillterController handleFilter={handleFilter} />
      </Col>
      <Col md={{ size: 4 }}>
        <ViewController view={view} changeView={changeView} />
      </Col>
      <Col md={{ size: 4 }} className="d-flex">
        <div className="ms-auto">
          <BulkController
            clearCompleted={clearCompleted}
            clearSelected={clearSelected}
            reset={reset}
          />
        </div>
      </Col>
    </Row>
  </div>
);

// propTypes for Controller
Controller.propTypes = {
  term: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  clearSelected: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
};

export default Controller;
