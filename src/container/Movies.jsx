import React from 'react'
import { connect } from 'react-redux'
import { Input, Row, Col, message } from 'antd'

import { fetchMovies, resetMoviesError } from '../redux/reducers/movie'
import MovieCard from '../component/movie-card/MovieCard'
import './movies.scss'

const { Search } = Input

function Movies(props) {
    const {
        movies,
        error,
        fetchMovies,
        resetMoviesError
    } = props

    function onCloseError() {
        resetMoviesError()
    }

    return (
        <>
            { error && message.error(error, undefined, onCloseError) }
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
                <Row>
                    <Col span={20} offset={2}>
                        <Row gutter={16}>
                            {movies.map(movie =>
                                <MovieCard
                                    key={movie.id}
                                    imageId={movie.poster_path}
                                    title={movie.title}
                                    description={movie.overview}
                                />
                            )}
                        </Row>
                    </Col>
                </Row>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    movies: state.movie.movies,
    error: state.movie.error
})

const mapDispatchToProps = {
    fetchMovies,
    resetMoviesError
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movies)
