import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Counter from './Counter/Counter'
import CounterLive from './CounterLive/CounterLive'
import Persons from './Persons/Persons'
import Chat from './Chat/Chat'

const Content = () => (
    <>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/counterlive" component={CounterLive} />
        <Route exact path="/persons" component={Persons} />
        <Route exact path="/chat" component={Chat} />
    </>
)

export default Content