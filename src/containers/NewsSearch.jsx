import React, { Component } from 'react';
import { fetchArticles } from '../services/NewsAPI';
import ArticleList from '../components/Articles/ArticleList';

export default class NewsSearch extends Component {
  state = {
    loading: true,
    articles: [],
  };

  render() {
    const { loading } = this.state;
    if (loading) return <h1>Loading...</h1>;
  }
}
