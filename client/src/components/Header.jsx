import React from 'react';

function Header(props) {
    const { links } = props.links;
    return (
        <div className="container">
            <div className="hero-body tabs is-centered">
                {links.map(link => {
                    return <ul><li><a
                        key={link}
                        onClick={() => props.onClick(link)}>
                        {link}</a></li></ul>
                })}
            </div>
        </div>
    )
}

export default Header;