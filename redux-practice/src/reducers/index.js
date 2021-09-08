import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
    isFetching: false,
    data: {
        anime: '',
        character: '',
        quote: ''
    },
    error: ''
}

const animeQuotesReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return ({
                ...state,
                isFetching: true,
                data: {
                    anime: '',
                    character: '',
                    quote: ''
                },
                error: ''
            })
        case FETCH_SUCCESS:
            return ({
                ...state,
                isFetching: false,
                data: action.payload
            })
        case FETCH_FAILURE:
            return ({
                ...state,
                isFetching: false,
                data: {
                    anime: '',
                    character: '',
                    quote: ''
                },
                error: action.payload
            })
        default:
            return state
    }
}

export default animeQuotesReducer;