import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ id, title, snippet, image }) => (
  <div>
    <img src={image} alt={title} style={{ width: '200px', height: '200px' }} />
    <h2>{title}</h2>
    <p>{snippet}</p>
    <Link to={`/article/${id}`}>Read More</Link>
  </div>
);

export default Article;
