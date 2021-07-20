import React from 'react';
import './Coin.css';

const Columns = () => {
    return(
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <h1>Currency</h1>
                    <p className="symbol">Symbol</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">Price</p>
                    <p className="coin-volume">Volume</p>
                    <p className="coin-percent"> Price Change</p>
                    <p className="coin-marketcap">
                       Market Cap
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Columns;