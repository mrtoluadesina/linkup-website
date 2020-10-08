import React from 'react';
import './index.scss';

import Wedding from '../../layout/Wedding';

const Event = () => {
    return (
        <Wedding>
            <div className="main section-center-middle">
                <div className="wedding-banner">
                    <img src="/assets/images/wedding-banner.png" alt="wedding banner" />
                </div>
                <div className="content">
                    <div className="container justify-center">
                        <div className="couple-name section-center-middle">
                            <h2>Temilore Orekoya</h2>
                            <span>+</span>
                            <h2>Tomiwa Olajide</h2>

                            <h3 className="story-title">How we met</h3>

                            <div className="story">
                                <h3>Temilore</h3>
                                <p>How we met was rather magical, I’d say - like a meet-cute straight out of a TV screen; entirely scripted, with the right pauses, the right plays...all we had to do was show up.</p>
                                <p>Stage set...action. Our love story began at my cousin’s wedding on 26/12/2015. I was a bridesmaid but I was meeting my cousin’s husband for the first time, so I went over to say hi and congratulations to him. He was with his friends, and I knew that I felt someone’s gaze on me. I stayed focused, said what I wanted to say and returned to my family.</p>
                                <p>I love a good movie meet-cute when eyes finally lock and time stops...so imagine my surprise when I was having unprovoked eye contact with this very handsome stranger who looked like he knew me from somewhere. After all the looking (STARING) at each other, looking for each other, waving happily across a corridor without knowing each other’s names, him averting his gaze from me during his toast so he won’t stumble over his words, we finally met and said each other’s names. What a moment!</p>
                                <p>Tomiwa (literally) walked very briskly into my life that day to get my number as I was leaving (desperado :P)...and here we are, almost five years later! I’m marrying the most amazing person I’ve ever known, my friend, my Life’s Great Love, the face I’d always look for in a crowded place. I’m at my best with you, Toms, and I can’t wait to live out the rest of my days with you.</p>
                            </div>

                            <div className="story">
                                <h3>Tomiwa</h3>
                                <p>We met at my friend’s wedding in 2015.</p>
                                <p>We were both on the train. I was jejely minding my business and discharging my duties as Ore Oko. Having prostrated etc, I took my seat in the row behind the groom. The arrangement of the event was such that the bride’s squad and family sat opposite the groom squad and family. </p>
                                <p>Then, I looked up.</p>
                                <p>I saw her. Our eyes met briefly. And everybody just faced their front to keep minding their business. I would catch myself looking or wanting to look. Then, we would sort of catch each other staring. Hmmm (Trouble!). She became my business. </p>
                                <p>(I thought I came for my friend’s wedding?) Well, na so we see am. Now, I’m tracking her every move everywhere she went with my spidey senses, all the while trying to keep my calm. Until she came by my side to use the restroom. I smiled and waved. She smiled back and waved. It felt like we’d been friends for a long time. (Lights. Camera. Butterflies!)</p>
                                <p>After this, then that, then collecting her number and getting to know her...there came #TTLaiLai</p>
                                <p>And that’s how that moment turned into years, and how the years will turn into forever. With my life’s greatest love.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wedding>
    )
}

export default Event;