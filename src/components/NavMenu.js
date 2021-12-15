import React from "react";
import PropTypes from 'prop-types';

import NavItem from "./NavItem";

export default function PureNavMenu ({loading, styles,}) {
    const LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span> Loading </span><span>cool</span><span>state</span>
            </span>
        </div>
    )
    if(loading) {
        return (
            <div className="nav-menu">
                {()=>{
                    {for(let i = 0;i<styles.length;i++){
                    return(
                        LoadingRow
                    )
                }}
                }}
            </div>
        );
    }
    if(styles.length === 0)
    return (
        <div className="nav-menu">
            <h2>Error</h2>
        </div>
    )
    return(
        <div class="nav-menu">
        {styles.map(style =>{
            <NavItem 
            key={style.id} 
            style={style} 
            ></NavItem>
        })}
        </div>
    )
}

PureNavMenu.propTypes = {
    /** Checks if its in loading state */
    loading: PropTypes.bool,
    styles: PropTypes.arrayOf(NavItem.propTypes.style).isRequired,
    href: PropTypes.string,

};


PureNavMenu.defaultProps = {
    loading: false,
};