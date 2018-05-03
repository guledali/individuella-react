/* eslint-disable react/prefer-stateless-function  */
import React from 'react';
import styled from 'styled-components';

const Backgroundb = styled.div`
    background: #323330
    height: 150vh;
`;
const Movietitle = styled.div`
    color: #f5da55;
`;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
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
        <MovieGrid>
          {/* {this.state.movies.map(movie =>
            <h3 key={movie.id}>{movie.title}</h3>)} */}
          {this.state.movies.map(image =>
            <img key={image.id} src={`${posterPath}${image.poster_path}`} alt="" />) }
        </MovieGrid>
      </Backgroundb>
    );
  }
}
export default Home;