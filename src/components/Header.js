import React from 'react';

function Header() {
    const logo=(
    <img
     src="image.png"
     />
    );
    return(
        <div className="header">
            {logo}<h1>Keep</h1>
        </div>
    );
}

export default Header;
