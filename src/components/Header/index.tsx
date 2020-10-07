import React from 'react';

interface ComponentProps extends React.PropsWithChildren<unknown> { }

const Header: React.FC<ComponentProps> = (props) => {
    return (
        <header className="section-center-middle">
            <div className="container section-center-middle">
                <div className="side-item">
                    <p>Link Up</p>
                </div>
                <div className="side-item">
                    <p>#jolatunji2020</p>
                </div>
            </div>
        </header>
    )
}

export default Header;