import React from 'react';
import './index.scss';

import Icon from '@mdi/react';

interface ComponentProps extends React.InputHTMLAttributes<unknown> {
    icon?: string,
    type: string,
    name: string,
}

const Input: React.FC<ComponentProps> = props => {
    return (
        <div className="input-field">
            {props.icon &&
                <div className="icon">
                    <Icon path={props.icon || ''} size={1} />
                </div>
            }
            <input {...props} />
        </div>
    );
}

export default Input;