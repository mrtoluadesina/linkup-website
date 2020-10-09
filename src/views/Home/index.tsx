import React, { useState } from 'react';
import HomeLayout from '../../layout/Home';
// @ts-ignore
import ReactPageScroller from 'react-page-scroller';

import Slide from './Slide';

const Home = () => {
    const [state, setState] = useState<{ currentPage: number | null }>({
        currentPage: null
    });

    const handlePageChange = (number: number) => {
        setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
    };

    return (
        <HomeLayout>
            <ReactPageScroller
                pageOnChange={handlePageChange}
                customPageNumber={state.currentPage}
            >
                <Slide date="October 10, 2020" link="/event" slide={1}>
                    <div className="content">
                        <h2>Turn up <span>Naija</span> style</h2>
                        <p>Spray money just like you would if you were there</p>
                    </div>
                </Slide>
                <Slide date="October 10, 2020" link="/event" slide={2}>
                    <div className="content">
                        <h2>Turn up <span>Naija</span> style</h2>
                        <p>Spray money just like you would if you were there</p>
                    </div>
                </Slide>
                <Slide date="October 10, 2020" link="/event" slide={3}>
                    <div className="content">
                        <h2>Turn up <span>Naija</span> style</h2>
                        <p>Spray money just like you would if you were there</p>
                    </div>
                </Slide>
            </ReactPageScroller>
        </HomeLayout>
    )
}

export default Home;