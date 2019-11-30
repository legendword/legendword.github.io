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
                <h5>A Somewhat Awkward Introduction</h5>
                <p style={paragraphStyle}>
                    Hello there! I have been doing web programming as a hobby for 
                    about five years, producing numerous small or large projects 
                    of my own. While most of them are results of my learning process, 
                    there are some projects that I was very excited about and did 
                    really put my effort in.
                </p>
                <p style={paragraphStyle}>
                    As a means of sharing the excitement, I started to make my projects 
                    from the past open source. You can always have a look at them and 
                    perhaps submit an issue/pull request. This Github Pages site is 
                    created solely for the purpose of listing and introducing my 
                    repositories to you.
                </p>
                <p style={paragraphStyle}>
                    You can find information on a specific repository. For some of 
                    them, you might even find a story or the thought process of the 
                    project.
                </p>
                <hr />
                <h5>Some Links</h5>
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
        href: "http://legendword.com"
    }
]

export default MainIntro
