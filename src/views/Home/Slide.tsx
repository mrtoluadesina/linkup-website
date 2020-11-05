import React, {useState} from 'react';
import './index.scss';

import axios from 'axios';

interface ComponentProps extends React.HtmlHTMLAttributes<unknown> {
    date?: string,
    link: string,
    slide: number,
}

const Slide: React.FC<ComponentProps> = (props) => {
    const [loading, setLoading] = useState(false);

    const config = {
        headers: {
            "client-id": process.env.REACT_APP_CLIENT_ID!
        }
    }

    console.log(config);

    const handleClick = async (e: any) => {
        setLoading(true);
        e.preventDefault();
        try {
            let response = await axios.get(`https://link-event.herokuapp.com/api/v1/public-event`, config);
            let { data: {event} } = response;
            console.log(event);
            localStorage.setItem('events', JSON.stringify(event));
            setLoading(false);
            window.location.href = '/public-events';
        } catch (error) {
            console.log(error);
        }
    }

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
                    <a href="/" className="btn link" onClick={handleClick}>{loading ? 'Loading ...' : 'View Public Events'}</a>
                </div>
            </div>
        </div>
    )
}

export default Slide