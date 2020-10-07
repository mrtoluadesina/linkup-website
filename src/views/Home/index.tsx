import React, { useState } from 'react';
import HomeLayout from '../../layout/Home';
// @ts-ignore
import ReactPageScroller from 'react-page-scroller';

import Slide from './Slide';

const Home = () => {
    const [state, setState] = useState<{currentPage: number | null}>({
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
                <Slide tagline="Spray money just like you would if you were there" caption="Turn up the Naija way. Turn up Naija style" date="October 10, 2020" link="/event" />
                <Slide tagline="Spray money just like you would if you were there" caption="Turn up the Naija way. Turn up Naija style" date="October 10, 2020" link="/event" />
                <Slide tagline="Spray money just like you would if you were there" caption="Turn up the Naija way. Turn up Naija style" date="October 10, 2020" link="/event" />
            </ReactPageScroller>
        </HomeLayout>
    )
}

export default Home;