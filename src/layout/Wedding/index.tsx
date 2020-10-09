import React from 'react';
import EventHeader from '../../components/Header/EventHeader';
import Footer from '../../components/Footer';

interface ComponentProps extends React.PropsWithChildren<unknown> { }

const Wedding: React.FC<ComponentProps> = ({ children }) => {
    return (
        <>
            <EventHeader />
            {children}
            <Footer />
        </>
    )
}

export default Wedding;