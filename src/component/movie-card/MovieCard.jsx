import React, { useState, useEffect } from 'react'
import { Card, Col } from 'antd'

import Modal from '../modal/Modal'
import DetailsPage from '../details-page/DetailsPage'

import './movie-card.scss'

const { Meta } = Card

export default function MovieCard(props) {
    const [detailsPageIsOpen, setDetailsPageIsOpen] = useState(false)
    const { movieId, imageId, title, description, fetchDetails } = props
    const movieUrl = `https://image.tmdb.org/t/p/w300${imageId}`

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0]

        if (detailsPageIsOpen) {
            body.style.overflow = 'hidden'
        } else {
            body.style.overflow = ''
        }
    }, [detailsPageIsOpen])

    function loadDetails() {
        setDetailsPageIsOpen(true)
        fetchDetails(movieId)
    }

    return (
        <>
            <Col sm={12} md={8} lg={4}>
                <div className="card-wrapper" onClick={loadDetails}>
                    <Card
                        hoverable
                        cover={<img alt={imageId} src={movieUrl} />}
                    >
                        <Meta title={title} description={description} />
                    </Card>
                </div>
            </Col>

            { detailsPageIsOpen && <Modal>
                <DetailsPage />
            </Modal> }
        </>
    )
}