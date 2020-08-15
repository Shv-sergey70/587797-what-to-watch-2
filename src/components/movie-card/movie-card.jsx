import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({title, onTitleClick}) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src="img/macbeth.jpg"
          alt="Macbeth" width="280" height="175"/>
      </div>
      <h3
        className="small-movie-card__title"
        onClick={onTitleClick} >
        <a
          className="small-movie-card__link"
          href="movie-page.html"
        >{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default MovieCard;
