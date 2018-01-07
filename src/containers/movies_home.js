import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { promiseMovies } from '../actions/index';
import MovieCard from '../components/movie_card';

class MoviesHome extends Component {
  componentDidMount() {
    this.props.promiseMovies();
  }

  render() {
    if(this.props.movies.length === 0) {
      return <div>asdf</div>
    }
    return (
      <div className="container">
        <div className="row">
          {
            this.props.movies.map((movie) => {
              return <MovieCard {...movie} key={movie.id} />
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { movies: state.movies }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({promiseMovies}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesHome);