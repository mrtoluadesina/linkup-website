import React from 'react';
import Nav from '../Nav';

interface ComponentProps extends React.PropsWithChildren<unknown> { }

const EventHeader: React.FC<ComponentProps> = (props) => {
    return (
        <div className="header">
            <div className="top-header">
                
            </div>
            <p>This is the Event Header</p>
        </div>
    )
}

export default EventHeader;