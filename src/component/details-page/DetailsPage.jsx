import React from 'react'
import { LeftOutlined, CloseOutlined } from '@ant-design/icons'
import { Typography } from 'antd';

import './details-page.scss'

const { Title } = Typography;

export default function DetailsPage(props) {
    const { onClose, details } = props
    const { original_title, release_date, vote_average, overview } = details
    console.log('-- onClose', onClose)

    return (
        <div className="detials-page-overlay">
            <div className="details-page-wrapper">
                <div className="navigation">
                    <span className="back-button" onClick={() => onClose(false)}>
                        <LeftOutlined /> back
                    </span>
                    <span className="cross-button">
                        <CloseOutlined onClick={() => onClose(false)}/>
                    </span>
                </div>
                <div className="details-content">
                    <Title>{ original_title }</Title>
                    <Title level={2}>{ release_date }</Title>
                    <Title level={2}>{ vote_average }</Title>
                    <div className="details-description">{ overview}</div>
                </div>
            </div>
        </div>
    )
}