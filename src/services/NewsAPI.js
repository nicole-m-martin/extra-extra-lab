const findArticles = (json) =>
  json.articles.map(({ author, title, description, url }) => ({
    author,
    title,
    description,
    url,
  }));

export const fetchArticles = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=today&apiKey=2ee33555da1346308f2cd78a8b516eb6`
  );
  const results = await res.json();

  return findArticles(results);
};

export const fetchArticlesByKeyword = async (articleKeyword) => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${articleKeyword}&apiKey=2ee33555da1346308f2cd78a8b516eb6`
  );
  const results = await res.json();

  return findArticles(results);
};
