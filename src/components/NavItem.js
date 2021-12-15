import React from "react";
import PropTypes from 'prop-types';


export default function NavIcon ({style: {id, paths, size, color, viewBox, title}, href}) {
    return(
        <div class="nav-item">
            <a class="svg-wrapper" href={href}>
                <svg 
                id={id} 
                width={size} 
                height={size} 
                style={{"fill": color}} 
                viewBox={viewBox}
                >
                    {paths.map(function(path){
                        return (
                            path
                        )
                    })}

                </svg>
            </a>
            <h4>{title}</h4>
        </div>
            
    )
    

};


NavIcon.propTypes = {
    style: PropTypes.shape({
        id: PropTypes.string.isRequired,
        paths: PropTypes.array.isRequired,
        size: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        viewBox: PropTypes.string.isRequired,
        href: PropTypes.string,
    })
    
};

