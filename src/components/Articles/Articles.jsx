import React from 'react';
import PropTypes from 'prop-types';

const Articles = ({ title, author, description, url }) => (
  <>
    <li key={url}>
      <h2 key={title}> {title}</h2>
      <h5 key={author}>{author}</h5>
      <p key={description}>{description}</p>
      <a href={url}></a>
    </li>
  </>
);

Articles.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Articles;
