import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../config/routes';

export const Menu = () => {
    return (
        <div>
            {routes.map((item) => (
                <Link key={item.path} to={item.path} className="menuItem">{item.label}</Link>
            ))}
        </div>
    )
};
