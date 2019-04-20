import React from 'react';
import Delay from 'react-delay';
import { connect } from 'react-redux';
import './loadingSpinner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const loadingSpinner = ({ loading }) => (
    <React.Fragment>
        {loading &&
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
        }
    </React.Fragment>
);

const mapStateToProps = (state) => ({
    loading: state.ajaxStatus > 0,
})

export default connect(mapStateToProps)(loadingSpinner);