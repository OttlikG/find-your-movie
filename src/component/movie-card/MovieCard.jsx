import React from 'react'
import { Card, Col } from 'antd'

import './movie-card.scss'

const { Meta } = Card

export default function MovieCard(props) {
    const { imageId, title, description } = props
    const movieUrl = `https://image.tmdb.org/t/p/w300${imageId}`

    return (
        <Col sm={12} md={8} lg={4}>
            <div className="card-wrapper">
                <Card
                    hoverable
                    cover={<img alt={imageId} src={movieUrl} />}
                >
                    <Meta title={title} description={description} />
                </Card>
            </div>
        </Col>
    )
}