

const initialState = {
    movies: []
}

const SET_MOVIES = 'movie/SET_MOVIES'

export default function (state = initialState, action) {
    switch(action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        default:
            return state
    }
}

const setMovies = (movies) => ({
    type: SET_MOVIES,
    payload: movies
})

export const fetchMovies = (searchTerm) => async (dispatch) => {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
    const response = await fetch(url)
    const data = await response.json()

    dispatch(setMovies(data.results))
    console.log('-- daata', data)
} 