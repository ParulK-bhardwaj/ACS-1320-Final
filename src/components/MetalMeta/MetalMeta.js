import React from 'react';
import data from '../../metal.json';
import './MetalMeta.css';

function MetalMeta() {
    return (
        <div className='MetalMeta'>
            <p>Total Bands: {data.length}</p>
            <p>Total Fans: {data.reduce((total, band) => 
                total + (parseInt(band.fans) * 1000),0
            ).toLocaleString('en')}</p>
        </div>
    )
};

export default MetalMeta