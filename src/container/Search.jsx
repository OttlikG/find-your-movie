import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { connect } from 'react-redux'

import { fetchMovies } from '../redux/reducers/movie'

import './search.scss'

const { Search } = Input


function SearchContainer(props) {
    const { fetchMovies } = props
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className="search-container">
            <Search
                className="search-bar"
                placeholder="Search movies"
                onChange={event => setSearchTerm(event.target.value)}
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
        movie: state.movie
    })
}

const mapDispatchToProps = {
    fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)