import React from 'react';
import './index.scss';

interface ComponentProps extends React.PropsWithChildren<unknown> {
    className?: string
}

const Card: React.FC<ComponentProps> = (props) => {
    return (
        <div className={`card ${props.className || ''}`}>
            {props.children}
        </div>
    );
}

export default Card;