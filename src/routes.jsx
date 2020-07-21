import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Search from './container/Search'
import Movies from './container/Movies'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/movies" component={Movies} />
        </Switch>
    )
}
