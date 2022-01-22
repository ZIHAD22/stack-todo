import PropTypes from "prop-types";
import { Input, Button } from "reactstrap";

// main component
const SearchPanel = ({ term, handleSearch, toggleForm }) => (
  <div className="d-flex">
    <Input
      placeholder="Enter Search Term"
      className="me-3"
      value={term}
      onChange={handleSearch}
    />
    <Button color="success" onClick={toggleForm}>
      New
    </Button>
  </div>
);

// propTypes for SearchPanel
SearchPanel.propTypes = {
  term: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default SearchPanel;
