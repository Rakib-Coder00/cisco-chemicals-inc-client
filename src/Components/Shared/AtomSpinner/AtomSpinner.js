import React from 'react';
import './AtomSpinner.css'

const AtomSpinner = () => {
    return (
        <div className="atom">
            <div className="loading">
                <div className="arc"></div>
                <div className="arc"></div>
                <div className="arc"></div>
            </div>
        </div>
    );
};

export default AtomSpinner;