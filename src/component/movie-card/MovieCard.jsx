import React from 'react'
import { Card } from 'antd'

import './movie-card.scss'

const { Meta } = Card

export default function MovieCard(props) {
    const { imageId, title, description } = props
    const movieUrl = `https://image.tmdb.org/t/p/w300${imageId}`

    return (
        <div className="card-wrapper">
        <Card
            hoverable
            cover={<img alt={imageId} src={movieUrl} />}
        >
            <Meta title={title} description={description} />
        </Card>
        </div>
    )
}