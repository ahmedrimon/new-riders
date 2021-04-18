import React from 'react';
import Event from '../Event/Event';
import fakedata from '../fakeData/fakeData.json'

const Events = () => {
    console.log(fakedata)
    return (
        <div className="row">
            {
                fakedata.map(e => <Event event={e}></Event>)
            }
        </div>
    );
};

export default Events;