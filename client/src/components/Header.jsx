import React from 'react';

function Header(props) {
    const { links } = props;
    return(
        <div>
            {links.map(link => {
                return <nav
                key={link}
                onClick={() => props.onClick(link)}>
                {link}</nav>
            })}
        </div>
    )
}

export default Header;