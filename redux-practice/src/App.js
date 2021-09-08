import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAnimeQuote } from './actions';

import './App.css';
import axios from 'axios';


function App(props) {
  const { anime, character, quote } = props.data;

  useEffect(() => {
    props.getAnimeQuote();
  }, [])

  const handleClick = () => {
    props.getAnimeQuote();
  }

  return (
    <div className="App">
      <div className='anime-quote'>
        {
          props.isFetching
          ? <h1>Fetching a quote...</h1>
          : <div className='content'>
            <h1>Get your Anime Quote !</h1>
            <button onClick={handleClick}>Fetch Quote</button>

            {
              props.error
                ? <div>{props.error}</div>
                : <div className='quote-card'>
                  <h3>Anime: <i>{anime}</i></h3>
                  <div>Character: {character}</div>
                  <div>Quote: {quote}</div>
                </div>
            }
          </div>
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    isFetching: state.isFetching,
    data: {
      anime: state.data.anime,
      character: state.data.character,
      quote: state.data.quote,
    },
    error: state.error
  })
}
export default connect(mapStateToProps, { getAnimeQuote })(App);
