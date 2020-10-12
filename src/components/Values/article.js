import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Article = ({ img, title, content }) => (
  <article className="article">
    <img src={img} alt="logo" className="article__img" />
    <section className="article__content">
      <h2 className="article__content--title">{title}</h2>
      <p className="article__content--text">
        {content}
      </p>
    </section>

  </article>
);

Article.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Article;
