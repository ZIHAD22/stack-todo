import PropTypes from "prop-types";

// our Custom Components
import SearchPanel from "./search-panel";

// main Component
const Controller = ({ term, handleSearch, toggleForm }) => (
  <div>
    <SearchPanel
      term={term}
      handleSearch={handleSearch}
      toggleForm={toggleForm}
    />
  </div>
);

// propTypes for Controller
Controller.propTypes = {
  term: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default Controller;
