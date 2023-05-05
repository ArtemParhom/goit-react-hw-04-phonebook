import PropTypes from 'prop-types';
import css from './filter.module.css';

export const Filter = ({ onChange, value }) => {
  return (
    <div>
      <label>
        <h3 className={css.filterTitle}>Find contacts by name</h3>
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
