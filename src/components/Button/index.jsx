import React from 'react'

import './styles.css'

export default function Button(props) {
    return (
        <>
            <p className="button--p">
                {props.text}
            </p>
        </>
    )
}
