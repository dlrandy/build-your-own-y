import React from 'react'
import {RouterContext} from './RouterContext';
export const Link = ({to, children}) => {
    const {push} = React.useContext(RouterContext)
    function handleClick(e) {
        e.preventDefault()
        push(to);
    }
    return (
        <a href={to} onClick={handleClick} >
            {children}
        </a>
    );
    
    
}
