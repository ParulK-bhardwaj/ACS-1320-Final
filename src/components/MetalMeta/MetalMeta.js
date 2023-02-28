import React from 'react';
import data from '../../metal.json';
import './MetalMeta.css';

function MetalMeta() {
    let totalFans = 0
    return (
        <div className='MetalMeta'>
            <p>Total Bands: {data.length}</p>
            <p>Total Fans: {data.reduce((total, band) => 
                totalFans + (parseInt(band.fans) * 1000 )
            ).toLocaleString('en')}</p>
        </div>
    )
};

export default MetalMeta