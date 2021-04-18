import React from 'react';

const Event = (props) => {
    const event = props.event;
    console.log(event);
    const {name, img} = event;
    return (
        <div>
            <div className="col-md-3 mb-3">
                <div className="m-3 shadow rounded p-3 h-100">
                    <img className="img-fluid" src={img} alt=""/>
                    <h4 className="text-center">{name}</h4>
                </div>
            </div>
        </div>
    );
};

export default Event;