import React from 'react'

export default function ALink(props) {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">{props.href}</a>
    )
}
