import React from 'react'

import './Card.css'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
    return (
        <div className={props.class}>
            <NavLink to={props.to && props.to}>
            <p>{props.titre}</p>
            </NavLink>
        </div>
    )
}

export default Card