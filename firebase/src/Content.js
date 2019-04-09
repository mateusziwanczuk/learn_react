import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Arteon from './Arteon/Arteon'
import Touareg from './Touareg/Touareg'
import Chat from './Chat/Chat'

const Content = () => (
    <>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/arteon" component={Arteon} />
        <Route exact path="/touareg" component={Touareg} />
        <Route exact path="/chat" component={Chat} />
    </>
)

export default Content