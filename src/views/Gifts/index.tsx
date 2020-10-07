import React, {useState} from 'react';
import './index.scss';

import Wedding from '../../layout/Wedding';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {mdiCurrencyNgn} from '@mdi/js';

const Gifts = () => {
    const [amount, setAmount] = useState('0');
    const handleChange = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        setAmount(e.currentTarget.value);
    }

    console.log(setAmount);

    return (
        <Wedding>
            <div className="main section-center-middle">
                <div className="big-day-banner">
                    <img src="/assets/images/gift-banner.png" alt="wedding banner" />
                </div>
                <div className="content">
                    <div className="container justify-center">
                        <div className="gift-content section-center-middle">
                            <h3>Cash Gifts Only</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        </div>

                        <Card className="donate-card">
                            <h3>Input amount to  donate</h3>
                            <form>
                                <Input type="text" name="amount" value={amount} onChange={handleChange} icon={mdiCurrencyNgn}  />
                                <Button text="Donate" />
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </Wedding>
    )
}

export default Gifts;