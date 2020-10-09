import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import "./index.scss";

import Wedding from "../../layout/Wedding";
import Card from "../../components/Card";
import Input from "../../components/Input";

import { mdiCurrencyNgn, mdiEmail } from "@mdi/js";

const Gifts = () => {
  const [number, setNumber] = useState(0);
  const [email, setEmail] = useState("");
  const handleChange = (event: any) => {
    event.preventDefault();
    setNumber(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const amount = number * 100;
  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY!;

  const componentProps = {
    email,
    amount,
    publicKey,
    text: "Donate",
    onSuccess: () => alert("Thanks for donating!!"),
    onClose: () => alert("Wait! Are you sure you don't want to donate!!!"),
  };

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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip
              </p>
            </div>

            <Card className="donate-card">
              <h3>Input amount to donate</h3>
              <form>
                <Input
                  type="text"
                  name="amount"
                  value={number}
                  onChange={handleChange}
                  icon={mdiCurrencyNgn}
                />
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  icon={mdiEmail}
                />
              </form>
              <PaystackButton className="paystack-button" {...componentProps} />
            </Card>
          </div>
        </div>
      </div>
    </Wedding>
  );
};

export default Gifts;
