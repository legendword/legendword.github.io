import React, { Component } from 'react'

export class RepoProps extends Component {
    render() {
        return (
            <dl className="row repo-props">
                {
                    allProps.filter((i) => {
                        return !(this.props.data[i]==null)
                    }).map((t,ind) => {
                        if (t==="Status") {
                            return (
                                <React.Fragment key={ind}>
                                    <dt className="col-sm-3">{alias[t]?alias[t]:t}</dt>
                                    <dd className="col-sm-9 status">
                                        {
                                            this.props.data[t].split(", ").map((x,id) => (
                                                <span className={`text-${statusColor[x]}`} key={id}>{x}</span>
                                            ))
                                        }
                                    </dd>
                                </React.Fragment>
                            )
                        }
                        else {
                            return (
                                <React.Fragment key={ind}>
                                    <dt className="col-sm-3">{alias[t]?alias[t]:t}</dt>
                                    <dd className="col-sm-9">{this.props.data[t]}</dd>
                                </React.Fragment>
                            )
                        }
                    })
                }
            </dl>
        )
    }
}

const allProps = ["StartDate", "Version", "EndDate", "Status"]

const alias = {
    StartDate: "Date of First Commit",
    EndDate: "Date of Final Commit",
    Status: "Project Status"
}

const statusColor = {
    Contemporary: "primary",
    Stable: "success",
    Deprecated: "warning",
    Outdated: "warning",
    "Dev Beta": "secondary",
    "Public Beta": "info",
    "Open Beta": "info"
}

export default RepoProps
