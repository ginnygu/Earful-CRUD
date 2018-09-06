import React from 'react';

function Header(props) {
    const { links } = props;
    return(
        <div>
            {links.map(link => {
                return <button
                key={link}
                onClick={() => props.onClick(link)}>
                {link}</button>
            })}
        </div>
    )
}

export default Header;