import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Input from '../Input';
import Modal from '../Modal';
import './index.scss';

import axios from 'axios';

interface ComponentProps extends React.PropsWithChildren<unknown> {
    history?: Array<string>
}

const Header: React.FC<ComponentProps> = (props) => {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [hashtag, setHashtag] = useState('');

    const handleClick = (e: any) => {
        e.preventDefault();
        setShowModal(true);
    }

    const closeModal = (e: any) => {
        e.preventDefault();
        setShowModal(false);
    }

    const handleChange = (e: any) => {
        setHashtag(e.target.value);
    }

    const config = {
        headers: {
            "client-id": process.env.REACT_APP_CLIENT_ID!
        }
    }

    const handleSubmit = async (e: any) => {
        setLoading(true);
        e.preventDefault();
        try {
            let response = await axios.get(`https://link-event.herokuapp.com/api/v1/event?hashtag=${hashtag}`, config);
            let { data } = response;
            console.log(response.data);
            localStorage.setItem('event', JSON.stringify(data));
            // window.location.replace('/event');
            window.location.href = '/event';
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <header className="home section-center-middle">
                <div className="container justify-space">
                    <div className="logo-item">
                        <Link to="/"><img src="/assets/images/logo-alt.png" alt="brand" /></Link>
                    </div>
                    <div className="menu">
                        {/* <Link to="/">Join Event</Link> */}
                        <a href="/" className="btn btn-white" onClick={handleClick}>Join Event</a>
                        <a href="https://app.owambe.ng" className="btn">Book a spot</a>
                        {/* <a href="https://app.owambe.ng/event/detail/5f819776dfe9b500251ba716" className="btn">Attend First Event</a> */}
                    </div>
                </div>
            </header>
            {showModal && <Modal onClick={closeModal}>
                <form className="form" onSubmit={handleSubmit}>
                    <Input type="text" name="hashtag" placeholder="event tag" onChange={handleChange} value={hashtag} />
                    <Button type="submit" text="Proceed" loading={loading} />
                </form>
            </Modal>}
        </>
    )
}

export default Header;