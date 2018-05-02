/* eslint-disable react/prefer-stateless-function  */
import React from 'react';
import styled from 'styled-components';

const Backgroundb = styled.div`
    background: #323330
    height: 100vh;
`;
const Movietitle = styled.div`
    color: #f5da55;
`;


class Home extends React.Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=30c2a04cf81891cc0f9eaa90e57c0b0a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      // console.log(movies);
      this.setState({
        movies: movies.results,
      });
      console.log(this.state.movies);
    } catch (e) {
      // console.log(e);
    }
  }

  render() {
    const posterPath = 'http://image.tmdb.org/t/p/w154';
    return (
      <Backgroundb>
        <Movietitle className="text-center pt-5 display-3 font-weight-bold">Movie database</Movietitle>
        <div>
          {this.state.movies.map(movie =>
            <h3 key={movie.id}>{movie.title}</h3>)}
          {this.state.movies.map(image =>
            <img key={image.id} src={`${posterPath}${image.poster_path}`} />) }
        </div>
      </Backgroundb>
    );
  }
}
export default Home;
