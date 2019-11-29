import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavList extends Component {
    render() {
        return (
            <div className="list-group">
                {
                    this.props.data.map((t,id) => (
                        <NavLink 
                            to={t.routerPath ? t.routerPath : `/${t.name}`} 
                            className="list-group-item list-group-item-action" 
                            activeClassName="active"
                        >
                            {t.name}
                        </NavLink>
                    ))
                }
            </div>
        )
    }
}

export default NavList
