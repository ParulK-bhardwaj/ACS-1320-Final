import React from 'react';
import Like from '../Like/Like';
import './Band.css'

function Band(props) {
    const { band_name, formed, origin, fans, split, style } = props
    const styleSplit = style.split(',')
    return (
        <div className='BandInfo'>
            <h1>{ band_name }</h1>
            <div>
                <p>Origin:{ origin } Fans:{ (fans * 1000).toLocaleString('en') }</p>
                <p>Formed:{ formed } Split:{ split }</p>
            </div>
            <div>
                {style}
                <ul>{ styleSplit.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}</ul>
            </div>
            <div>
                { split === '-'?  null : <Like/>}
            </div>
        </div>
    )
};

export default Band;