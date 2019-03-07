import React from 'react';
import Delay from 'react-delay';
import './loadingSpinner.css';

const loadingSpinner = () => (
    <Delay wait={300}>
        <div className="modal-loading">
            <div className="modal-loading-content">
                Loading...
            </div>
        </div>
    </Delay>
);

export default loadingSpinner;