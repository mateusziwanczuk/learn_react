import React from 'react'
import { Route } from 'react-router-dom'
import Counter from './Counter/Counter'
import CounterLive from './CounterLive/CounterLive'
import Profile from './Profile/Profile'
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'

const Content = () => (
    <>
        <Route exact path="/"/>
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/counter-live" component={CounterLive} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
    </>
)

export default Content