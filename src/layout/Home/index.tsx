import React from 'react';
import Header from '../../components/Header';
import './index.scss';

interface ComponentProps extends React.PropsWithChildren<unknown> { }

const HomeLayout: React.FC<ComponentProps> = ({ children }) => {
    return (
        <div className="main">
            <Header />
            {children}
        </div>
    )
}

export default HomeLayout;