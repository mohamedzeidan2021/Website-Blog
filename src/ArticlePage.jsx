import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import articlesData from './articlesData';

const ArticlePage = () => {
  const { id } = useParams();
  const article = articlesData[id];

  return (
    <div>
      <Header />
        <main>
            <img src={article.image} alt={article.title} style={{ width: '200px', height: '200px' }} />
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;

