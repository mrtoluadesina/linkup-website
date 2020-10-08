import React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';

interface ComponentProps extends React.HtmlHTMLAttributes<unknown> {
    date: string,
    link: string,
    slide: number,
}

const Slide: React.FC<ComponentProps> = (props) => {
    return (
        <div className="slide">
            <div className="slide-bg">
                <img src={`/assets/images/home-banner-${props.slide}.jpg`} alt="banner" />
            </div>
            <div className="container slide-content">
                {props.children}
                <div className="cta section-center-middle">
                    <p>Experience the first virtual owambe party</p>
                    <p>Date: {props.date}</p>
                    <Link to={props.link} className="btn link">Join Event</Link>
                </div>
            </div>
        </div>
    )
}

export default Slide