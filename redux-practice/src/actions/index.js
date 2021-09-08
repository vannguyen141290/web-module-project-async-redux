import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";


export const getAnimeQuote = () => dispatch => {
    dispatch(fetchStart());

    axios.get('https://animechan.vercel.app/api/random')
        .then(res => dispatch(fetchSuccess(res.data)))
        .catch(err => dispatch(fetchFailure(err.message)))
}

export const fetchStart = () => ({type: FETCH_START});
export const fetchSuccess = data => ({type: FETCH_SUCCESS, payload: data});
export const fetchFailure = errorMessage => ({type: FETCH_FAILURE, payload: errorMessage})


