import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchMovies } from '../redux/reducers/movie'

import './search.scss'

const { Search } = Input


function SearchContainer(props) {
    const { isLoading, movies, fetchMovies, history } = props
    const [searchTerm, setSearchTerm] = useState('')

    if (movies.length) {
        history.push('/movies')
    }

    return (
        <div className="search-container">
            <Search
                className="search-bar"
                placeholder="Search movies"
                onChange={event => setSearchTerm(event.target.value)}
                loading={isLoading}
            />
            <Button
                className='search-button'
                type="primary"
                size="big"
                onClick={() => fetchMovies(searchTerm)}
            >
                Loading
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        isLoading: state.movie.isLoading,
        movies: state.movie.movies
    })
}

const mapDispatchToProps = {
    fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)