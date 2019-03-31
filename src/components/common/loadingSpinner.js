import React from 'react';
import Delay from 'react-delay';
import './loadingSpinner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const loadingSpinner = () => (
    <Delay wait={300}>
        <div className="modal-loading">
            <div className="modal-loading-content text-center">
                <FontAwesomeIcon
                    icon='spinner'
                    size="2x"
                    pulse
                    fixedWidth />
                Loading...
            </div>
        </div>
    </Delay>
);

export default loadingSpinner;