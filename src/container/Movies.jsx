import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Row, Col, message } from 'antd'

import { fetchMovies, resetMoviesError, fetchDetails } from '../redux/reducers/movie'
import MovieCard from '../component/movie-card/MovieCard'
import './movies.scss'

const { Search } = Input

class Movies extends Component {
    state = {
        hasError: false
    }

    onExpireError() {
        this.setState({
            hasError: false
        })
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        const {
            movies,
            error,
            movieDetails,
            fetchMovies,
            resetMoviesError,
            fetchDetails
        } = this.props

        const { hasError } = this.state

        return (
            <>
                { error && message.error(error, undefined, resetMoviesError) }
                { hasError && message.error('Something went wrong', undefined, this.onExpireError) }
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
                                        movieId={movie.id}
                                        deailts={movieDetails && movieDetails[movie.id]}
                                        imageId={movie.poster_path}
                                        title={movie.title}
                                        description={movie.overview}
                                        fetchDetails={fetchDetails}
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
}

const mapStateToProps = (state) => ({
    movies: state.movie.movies,
    movieDetails: state.movie.movieDetails,
    error: state.movie.error
})

const mapDispatchToProps = {
    fetchMovies,
    resetMoviesError,
    fetchDetails
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movies)
