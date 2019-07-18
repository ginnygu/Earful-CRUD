import React from 'react';

function Header(props) {
    // const { links } = props.links;
    return (
        <div className="container">
            <div className="hero-body tabs is-centered">
                {props.links.map(link => {
                    return <ul><li
                        key={link}
                        onClick={() => props.onClick(link)}
                        >{link}</li></ul>
                })}
            </div>
        </div>
    )
}

export default Header;