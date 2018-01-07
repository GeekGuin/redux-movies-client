import React from 'react';

const MovieCard = (props) => {
  return(
    <div className="col-sm-4">
      <div className="card">
        <img className="card-img-top" src={props.cover} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;