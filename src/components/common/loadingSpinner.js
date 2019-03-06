import React from 'react';
import Delay from 'react-delay';
import ReactLoading from 'react-loading'
import './loadingSpinner.css';

const loadingSpinner = () => (
    <Delay wait={300}>
        <div className="modal-loading">
            <div className="modal-loading-content">
                <ReactLoading type="spinningBubbles" color="#000" height={'100%'} width={'100%'} />
            </div>
        </div>
    </Delay>
);

export default loadingSpinner;