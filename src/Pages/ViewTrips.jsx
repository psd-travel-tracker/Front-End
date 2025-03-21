import React from 'react';
import Trips from '../Components/Trips.js';

export default function ViewTrips({data}) {
    return (
        <div>
            <h1 className="welcome-title">Trips</h1>
            <Trips data={data}/>
            <br/>
            <p>trips component. Will I loop in this file or do I loop within the component</p>
            <p>import the bottom sticky nav bar?</p>
        </div>
    );
}