import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavList extends Component {
    render() {
        return (
            <div>
                <h5>Repositories</h5>
                <div className="list-group">
                    {
                        this.props.data.map((t,id) => (
                            <NavLink 
                                to={t.routerPath ? t.routerPath : `/${t.name}`} 
                                className="list-group-item list-group-item-action" 
                                activeClassName="active"
                                key={id}
                            >
                                {t.name}
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default NavList
