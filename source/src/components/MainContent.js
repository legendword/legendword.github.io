import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MainIntro from './MainIntro'
import RepoProps from './RepoProps'
import ALink from './ALink'

export class MainContent extends Component {
    render() {
        return (
            <Switch>
                { this.props.data.map((t,id) => (
                    <Route path={t.routerPath ? t.routerPath : `/${t.name}`} key={id}>
                        <h3 style={{ marginTop: "20px" }}>
                            {t.name}
                        </h3>
                        <p>
                            <ALink href={t.url} />
                        </p>
                        <p>{t.desc}</p>
                        <RepoProps data={t.data} />

                    </Route>
                )) }
                <Route path="/intro">
                    <MainIntro />
                </Route>
                <Route exact path="/">
                    <Redirect to="/intro"></Redirect>
                </Route>
            </Switch>
        )
    }
}

export default MainContent
