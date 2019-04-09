import React from 'react'
import { Route } from 'react-router-dom'

import Counter from './Counter/Counter'
import CounterLive from './CounterLive/CounterLive'
import Profile from './Profile/Profile'

const Content = () => (
    <>
        <Route exact path="/"/>
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/counter-live" component={CounterLive} />
        <Route exact path="/profile" component={Profile} />
    </>
)

export default Content