'use client'

import React, { useEffect, useState } from 'react';

const Trips = () => {
    const [data, setDate] = useState([])

    useEffect(() => {
        fetch("http://jsonplaceholder.comm/posts")
        .then((res) => res.json())
        .then((res) => setDate(res));
    }, [])


    return (
        <div>
            {data.map((i: any) => (
                <p key={i.id}>{i.title}</p>
            ))}
        </div>
    );
};

export default Trips;