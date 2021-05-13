import React from 'react';
import PropTypes from 'prop-types';
import Articles from './Articles';

const ArticleList = ({ articles }) => (
  <ul aria-label="articles">
    {articles.map((article) => {
      return (
        <Articles
          title={article.title}
          author={article.author}
          description={article.description}
          url={article.url}
        />
      );
    })}
  </ul>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default ArticleList;
