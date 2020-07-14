import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import Search from './container/Search'

export default function Routes() {
    return (
        <div>
            <div>
                <Switch>
                    <Route exact path="/" component={Search} />
                </Switch>
            </div>
        </div>
    )
}
