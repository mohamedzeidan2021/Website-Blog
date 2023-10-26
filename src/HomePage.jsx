import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Article from './Article';
import articlesData from './articlesData';

const HomePage = () => (
  <div>
    <Header />
        <main>
          {/* render */}
        {Object.entries(articlesData).map(([id, article]) => (
            <Article key={id} id={id} {...article} />
        ))}
        </main>
    <Footer />
  </div>
);

export default HomePage;

