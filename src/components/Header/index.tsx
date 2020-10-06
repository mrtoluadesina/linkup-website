import React from 'react';

interface ComponentProps extends React.PropsWithChildren<unknown> {}

const Header: React.FC<ComponentProps> = (props) => {
    return (
        <p>This is the Header</p>
    )
}

export default Header;