import React, { useEffect, useState } from 'react';
import { useStore } from '../components/common/store';
import ArticleListPage from '../components/pages/ArticleListPage';

const ArticleContainer = () => {

  const { articles, getArticles } = useStore();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getArticles();
    console.log(articles);
  }, [getArticles]);

  useEffect(() => {
    if (articles.economy.length) {
      setLoad(true);
    }
    else {
      setLoad(false);
    }
  }, [articles]);
  
  return (
    <div>
      {load && articles.economy.length !== 0 && (<ArticleListPage article={articles} />)}
    </div>
  );
};

export default ArticleContainer;