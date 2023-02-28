import React from "react";
import Band from '../Band/Band';
import data from '../../metal.json';
import { useState } from "react";
import './BandList.css'

function BandList() {
    const [query, setQuery] = useState('');
    const bands = data
    .filter(obj => obj.band_name.toLowerCase().includes(query.toLowerCase())
    )
    .map(({ ID, band_name, fans, formed, origin, split, style }) => {
        return (
            <Band
            id={ID}
            key={band_name}
            band_name={band_name}
            fans={fans}
            formed={formed}
            origin={origin}
            split={split}
            style={style}
            />
        )
    })
    return (
        <div className="BandList">
            <div className="Search">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            </div>
            <div className="Bands">
                { bands }
            </div>
        </div>
    )
}

export default BandList;