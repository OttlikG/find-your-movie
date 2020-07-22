

const initialState = {
    movies: [],
    error: false
}

const SET_MOVIES = 'movie/SET_MOVIES'
const SET_MOVIES_ERROR = 'movie/SET_MOVIES_ERROR'
const SET_MOVIE_DETAILS = 'movie/SET_MOVIE_DETAILS'
const RESET_MOVIES_ERROR = 'movie/RESET_MOVIES_ERROR'

export default function (state = initialState, action) {
    switch(action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case SET_MOVIES_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case RESET_MOVIES_ERROR: {
            return {
                ...state,
                error: null
            }
        }
        case SET_MOVIE_DETAILS: {
            return {
                ...state,
                movieDetails: {
                    ...state.movieDetails,
                    [action.payload.id]: action.payload.details
                }
            }
        }

        default:
            return state
    }
}

const setMovies = (movies) => ({
    type: SET_MOVIES,
    payload: movies
})

const setMoviesError = (e) => ({
    type: SET_MOVIES_ERROR,
    payload: e.message
})

const setMovieDetails = (id, details) => ({
    type: SET_MOVIE_DETAILS,
    payload: {
        id,
        details
    }
})

export const resetMoviesError = () => ({
    type: RESET_MOVIES_ERROR
})

export const fetchMovies = (searchTerm) => async (dispatch) => {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`

    try {
        const response = await fetch(url)
        const data = await response.json()

        dispatch(setMovies(data.results))
    } catch (e) {
        dispatch(setMoviesError(e))
    }
}

export const fetchDetails = movieId => async dispatch => {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`

    try {
        const response = await fetch(url)
        const data = await response.json()

        dispatch(setMovieDetails(movieId, data))
    } catch (e) {
        dispatch(setMoviesError(e))
    }
}
