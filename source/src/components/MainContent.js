import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

export class MainContent extends Component {
    render() {
        return (
            <Switch>
                { this.props.data.map((t,id) => (
                    <Route path={t.routerPath ? t.routerPath : `/${t.name}`}>
                        <p>{t.desc}</p>
                    </Route>
                )) }
                <Route path="/intro">
                    <h3>Work in progress.</h3>
                </Route>
                <Route exact path="/">
                    <Redirect to="/intro"></Redirect>
                </Route>
            </Switch>
        )
    }
}

export default MainContent
