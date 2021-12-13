import React from "react";
import PropTypes from 'prop-types';


export default function Icon ({styles: {path, size, color, }, onClick}) {
    return(
        <a class="svg-wrapper" href={onClick}>
            <svg width={size} height={size} style={{"fill": color}} viewBox="0 0 1024 1024">
                <path d={path}></path>
            </svg>
        </a>
            
    )
    

};


Icon.propTypes = {
    path: PropTypes.string.isRequired,
    string: PropTypes.string.isRequired,
    onClick: PropTypes.string,
};

