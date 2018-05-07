/* eslint-disable react/prefer-stateless-function  */
import React from 'react';
import styled from 'styled-components';

const Backgroundb = styled.div`
    background: #323330
    height: 1000vh;
`;
const Movietitle = styled.div`
    color: #f5da55;
`;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(5, 1fr);
  // grid-row-gap: 1rem;
  grid-gap: 1rem;
  margin-left: 3.5rem;

  @media (max-width: 900px) {
     grid-template-columns: repeat(3, 1fr);
}
  @media (max-width: 600px) {
     grid-template-columns: repeat(2, 1fr);
}
`;


const Moviebutton = styled.button`
  display: block !important;
  margin: auto;
  width: 20%;
  background: #f5da55 !important;
  border: #f5da55 !important;
  color: #323330 !important;

  @media (max-width: 700px) {
    width: 30% !important;
}
`;


class Home extends React.Component {
  state = {
    movies: [],
  }


  componentWillUnmount() {
    this.setState({
      movies: [],
    });
  }

  handleClick = () => fetch('https://api.themoviedb.org/3/discover/movie?api_key=30c2a04cf81891cc0f9eaa90e57c0b0a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    .then(response => response.json())
    .then((movies) => {
      this.setState({
        movies: movies.results,
      });
    })

  // async componentDidMount() {
  //   try {
  //     const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=30c2a04cf81891cc0f9eaa90e57c0b0a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
  //     const movies = await res.json();
  //     // console.log(movies);
  //     this.setState({
  //       movies: movies.results,
  //     });
  //     console.log(this.state.movies);
  //   } catch (e) {
  //     // console.log(e);
  //   }
  // }

  render() {
    const posterPath = 'http://image.tmdb.org/t/p/w154';
    return (
      <Backgroundb>
        <Movietitle className="text-center pt-5 display-3 font-weight-bold">Movie database</Movietitle>
        <Moviebutton className="btn btn-primary font-weight-bold" onClick={this.handleClick}>GRAB MOVIES</Moviebutton>
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
