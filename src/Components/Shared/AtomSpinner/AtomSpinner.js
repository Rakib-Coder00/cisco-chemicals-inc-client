import React from 'react';
import './AtomSpinner.css'

const AtomSpinner = () => {
    return (
        <div className="atom">
            <div class="loading">
                <div class="arc"></div>
                <div class="arc"></div>
                <div class="arc"></div>
            </div>
        </div>
    );
};

export default AtomSpinner;