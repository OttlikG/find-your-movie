import React from 'react'
import { LeftOutlined, CloseOutlined } from '@ant-design/icons'
import { Typography, Skeleton } from 'antd';

import './details-page.scss'

const { Title } = Typography;

export default function DetailsPage(props) {
    const { onClose, details, img } = props
    const { original_title, release_date, vote_average, overview } = details

    function renderDetailsContentDescription() {
        console.log('- details', details)
        if (Object.keys(details).length) {
            return (
                <div className="details-content-description">
                    <Title>{ original_title }</Title>
                    <Title level={2}>{ release_date }</Title>
                    <Title level={2}>{ vote_average }</Title>
                    <div className="details-description">{ overview}</div>
                </div>
            )
        }

        return (
            <div className="details-skeleton">
                <Skeleton active />
                <Skeleton active />
            </div>
        )
    }

    return (
        <div className="detials-page-overlay">
            <div className="details-page-wrapper">
                <div className="details-content">
                    <div className="navigation">
                        <span className="back-button" onClick={() => onClose(false)}>
                            <LeftOutlined /> back
                        </span>
                        <span className="cross-button">
                            <CloseOutlined onClick={() => onClose(false)}/>
                        </span>
                    </div>
                    <div className="details-content-wrapper">
                        { renderDetailsContentDescription() }
                        <div className="details-image">
                            { img }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}