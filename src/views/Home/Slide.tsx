import React from 'react';
import './index.scss';

interface ComponentProps extends React.HtmlHTMLAttributes<unknown> {
    date?: string,
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
                    <p>Experience Owambe parties the virtual way</p>
                    {/* <p>Date: {props.date}</p> */}
                    <a href="/public-events" className="btn link">View Public Events</a>
                </div>
            </div>
        </div>
    )
}

export default Slide