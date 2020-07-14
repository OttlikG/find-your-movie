import React, { Component } from 'react'
import { Input, Button } from 'antd'

import './search.scss'

const { Search } = Input


export default class SearchContainer extends Component {
    render() {
        return (
            <div className="search-container">
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 400 }}
                />
                <Button className='search-button' type="primary" size="big">
                    Loading
                </Button>
            </div>
        )
    }
} 