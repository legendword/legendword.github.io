import React, { Component } from 'react'
import Alink from './ALink'

export class MainIntro extends Component {
    render() {
        return (
            <div>
                <h2 style={{ marginTop: "20px" }}>Legendword</h2>
                <div>
                </div>
                <br />
                <h5>An Introduction</h5>
                <p style={paragraphStyle}>
                    Hello there! I have been doing web programming as a hobby for 
                    about five years and worked on numerous projects of my own. 
                    While most of them are results of my learning process, 
                    there are a few projects which I put much effort in.
                </p>
                <p style={paragraphStyle}>
                    As a way of sharing the excitement, I started to make some of my 
                    projects open source. You can always have a look at them and 
                    perhaps submit an issue/pull request. This Github Pages site is 
                    created solely for the purpose of listing and introducing my 
                    repositories to you.
                </p>
                <p style={paragraphStyle}>
                    You can find some general information on my repositories here.
                    For some of them, you might even find a story or the thought process
                    behind the project.
                </p>
                <hr />
                <h5>Links</h5>
                <div className="container">
                    <dl className="row">
                        {
                            links.map((link,ind) => (
                                <React.Fragment key={ind}>
                                    <dt className="col-sm-3">{link.name}</dt>
                                    <dd className="col-sm-9"><Alink href={link.href} /></dd>
                                </React.Fragment>
                            ))
                        }
                    </dl>
                </div>
            </div>
        )
    }
}

const paragraphStyle = {
    textIndent: "30px"
}

const links = [
    {
        name: "GitHub",
        href: "https://github.com/legendword"
    },
    {
        name: "Website",
        href: "https://legendword.com"
    }
]

export default MainIntro
