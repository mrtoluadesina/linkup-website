import React, { useState } from 'react';
import axios from 'axios';
import Button from '../Button';
import Input from '../Input';
import Modal from '../Modal';
import './index.scss';

import Nav from '../Nav';

interface ComponentProps extends React.PropsWithChildren<unknown> {
    publicPage?: boolean
}

const EventHeader: React.FC<ComponentProps> = (props) => {
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
        <header className="section-center-middle">
            <div className="container section-center-middle">
                <div className="top-header justify-space">
                    <div className="logo-item">
                        <a href="/"><img src="/assets/images/logo.png" alt="brand" /></a>
                    </div>
                    {!props.publicPage && <div className="wedding-logo">
                        <img src="/assets/images/wedding-logo.png" alt="wedding" />
                    </div>}
                    <div className="side-item">
                        {props.publicPage ? (
                            <>
                                <a href="/" className="btn btn-white" onClick={handleClick}>Join Event</a>
                                <a href="https://app.owambe.ng" className="btn">Book a spot</a>
                            </>

                        ) : (
                                <a href="https://app.owambe.ng/event/detail/5f819776dfe9b500251ba716" className="btn">Attend #ttlailai</a>
                            )
                        }
                    </div>
                </div>
                {props.publicPage ? '' : <Nav />}
            </div>
            {showModal && <Modal onClick={closeModal}>
                <form className="form" onSubmit={handleSubmit}>
                    <Input type="text" name="hashtag" placeholder="event tag" onChange={handleChange} value={hashtag} />
                    <Button type="submit" text="Proceed" loading={loading} />
                </form>
            </Modal>}
        </header>
    )
}

export default EventHeader;