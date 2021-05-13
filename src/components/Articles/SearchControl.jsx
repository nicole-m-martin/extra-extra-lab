import React from 'react';
import PropTypes from 'prop-types';

const SearchControls = ({ keywordSearch, onKeywordSearchChange, onSubmit }) => (
  <form aria-label="keyword-search" onSubmit={onSubmit}>
    <label htmlFor="keyword-name">Keyword Search</label>
    <input
      aria-label="keyword-input"
      type="text"
      value={keywordSearch}
      onChange={onKeywordSearchChange}
    />
    <button aria-label="find-articles">Search Keywords</button>
  </form>
);

SearchControls.propTypes = {
  onKeywordSearchChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchControls;
