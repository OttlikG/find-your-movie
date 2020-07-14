import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

function Search() {
    return <div>Search</div>
}

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
