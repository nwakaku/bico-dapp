import React, { useEffect, useState } from "react";
import * as HyphenWidget from "@biconomy/hyphen-widget";
import "@biconomy/hyphen-widget/dist/index.css";


const Body = () => {
  const [hyphenWidget, setHyphenWidget] = useState();

    useEffect(() => {
    const widget = HyphenWidget.default.init(
      document.getElementById("widget"),
      {
        dAppName: "wisdom",
        showWidget: true,
        // showCloseButton: true,
        tag: "wisdom",
        env: "test",
        // API Keys for using Gasless
        apiKeys: {
          // Ethereum: string,
          Polygon: 'u5GdPUQES.fb87b92b-cc45-4a28-90cc-dd63f3b19ae7',
          // Avalanche: string,
        },
        rpcUrls: {
          // Ethereum: string,
          Polygon: 'https://polygon-mumbai.g.alchemy.com/v2/0QdTrxqIYXImRS7f00IiOAzZnAV-q5fX',
          // Avalanche: string,
        },
        // NOTE: following 2 callback emit when tx is *sent*, you should check the status by yourself
        onDeposit: (e) => console.log("Deposit " + e), // emit when depost tx is sent
        onExit: (e) => console.log("Exit " + e), // emit when exit tx (receiver will receive tokens) is sent
        /*
          input: {
          sourceChain?: string;
          destinationChain?: string;
          token?: string;
          amount?: string;
          receiver?: string;
          gasless: boolean;
          }
        */
        onChange: (input) => console.log("Input " + JSON.stringify(input)),
        }
        );

        if (widget) {
          setHyphenWidget(widget);
        }
          }, []);

        function handleOpen() {
          hyphenWidget.open();
        }

        function handleClose() {
          hyphenWidget.close();
        }
        const [popUp, setPopUp] = useState(true);

  return (
    <div>
      <div className="container">
        <div className="hero-text">
          <h3>Hi, There!</h3>
          <h1>
            Welcome to <span className="input">CrytoSwappy Dapp.</span>
          </h1>
          <div className={ `${popUp ? 'popup' : 'popup active'}`}>
            <div className="overlay"></div>
            <div className="content">
              <div className="close-btn" onClick={() => {setPopUp(!popUp);handleClose()}}>
            &times;
          </div>
          <div id="widget"></div>
            </div>
          </div>
          <ul>
            {/* <li>Accept payments by credit card, debit card or bank transfer</li> */}
            <li>
              More than 100 countries and territories supported with over 60
              currencies, so users pay in their local currency,<br/>
              Support for all major blockchains, tokens and stable-coins. 80+
              cryptocurrencies in total
            </li>
          </ul>
          <div className="social">
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-behance-square"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </div>
          <div className="forbuttons">
            <button type="button" className="launch-button" onClick={() => {setPopUp(!popUp);handleOpen()}}>
              Launch App
            </button>
          </div>
        </div>
        <div className="hero-img">
          {/* <iframe height="600" title="Transak On/Off Ramp Widget (Website)" src="https://staging-global.transak.com?apiKey=fec0443a-44f5-4890-aa3f-b09626d6485e" allowtransparency="true" allowfullscreen="" style="display: block; width: 100%; max-height: 550px; max-width: 450px; border: none;"></iframe> */}
        </div>

        <div className="bottom">
          <p>@ 2022 CrytoSwappy app - All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
