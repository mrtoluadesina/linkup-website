import React from 'react';
import EventHeader from '../../components/Header/EventHeader';
import Footer from '../../components/Footer';

interface ComponentProps extends React.HtmlHTMLAttributes<unknown> {
    publicPage?: boolean
}

const Wedding: React.FC<ComponentProps> = ({ publicPage, children }) => {
    return (
        <>
            <EventHeader publicPage={publicPage} />
            {children}
            {publicPage && <Footer />}
        </>
    )
}

export default Wedding;