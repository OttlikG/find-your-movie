import React from 'react'
import { LeftOutlined } from '@ant-design/icons'

import './details-page.scss'

export default function DetailsPage() {
    return (
        <div className="detials-page-overlay">
            <div className="details-page-wrapper">
                <div className="navigation">
                    <LeftOutlined />
                </div>
                Test
            </div>
        </div>
    )
}