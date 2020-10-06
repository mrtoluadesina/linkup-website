import React from 'react';
import Header from '../../components/Header';

interface ComponentProps extends React.PropsWithChildren<unknown> {}

const HomeLayout: React.FC<ComponentProps> = ({children}) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default HomeLayout;