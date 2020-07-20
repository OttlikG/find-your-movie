import React from 'react'
import { connect } from 'react-redux'
import { Input } from 'antd'

import { fetchMovies } from '../redux/reducers/movie'
import './movies.scss'

const { Search } = Input

function Movies(props) {
    const {
        location,
        fetchMovies
    } = props

    console.log('-- location', location)

    return (
        <div className='movies-container'>
            <div className='search-bar'>
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onSearch={fetchMovies}
                />
            </div>
            <div className="result">

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    movie: state.movie
})

const mapDispatchToProps = {
    fetchMovies
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movies)
