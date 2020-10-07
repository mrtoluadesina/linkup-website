import React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';

interface ComponentProps extends React.HtmlHTMLAttributes<unknown> {
    tagline: string,
    caption: string,
    date: string,
    link: string,
}

const Slide: React.FC<ComponentProps> = (props) => {
    return (
        <div className="slide">
            <h2>{props.caption}</h2>
            <p>{props.tagline}</p>
            <p>Experience the first virtual owambe party</p>
            <p>Date: {props.date}</p>
            <Link to={props.link} className="link">Request Invite</Link>
        </div>
    )
}

export default Slide