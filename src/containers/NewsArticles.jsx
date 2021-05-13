import React, { Component } from 'react';
import { fetchArticles, fetchArticlesByKeyword } from '../services/NewsAPI';
import ArticleList from '../components/Articles/ArticleList';
import SearchControls from '../components/Articles/SearchControl';

export default class NewsArticles extends Component {
  state = {
    loading: true,
    articles: [],
    keywordSearch: '',
  };

  async componentDidMount() {
    const articles = await fetchArticles();
    this.setState({
      loading: false,
      articles,
    });
  }

  handleKeywordSearch = ({ target }) =>
    this.setState({ keywordSearch: target.value });

  handleSubmitClick = async (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const articles = await fetchArticlesByKeyword(this.state.keywordSearch);
    this.setState({
      loading: false,
      articles,
    });
  };

  render() {
    const { loading, articles, keywordSearch } = this.state;
    if (loading) return <h1>Loading...</h1>;

    return (
      <>
        <SearchControls
          keywordSearch={keywordSearch}
          onKeywordSearchChange={this.handleKeywordSearch}
          onSubmit={this.handleSubmitClick}
        />

        <ArticleList articles={articles} />
      </>
    );
  }
}
