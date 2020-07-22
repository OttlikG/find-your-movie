import React from 'react'
import { LeftOutlined, CloseOutlined } from '@ant-design/icons'

import './details-page.scss'

export default function DetailsPage(props) {
    const { onClose } = props
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
                <div className></div>
                Test
            </div>
        </div>
    )
}