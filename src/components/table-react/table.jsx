import React, { useMemo } from 'react';
import { useEffect, useState } from 'react';
import './table.css';

export const Table = () => {
    const [data, setData] = useState([]);

    const [search, setSearch] = useState('');

    const filteredData = useMemo(() => {
        return dummyData.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    }, [search]);

    const dummyData = [
        {
            title: 'kit kat',
            image: 'no image',
            description: 'some good chocolate',
        },
        {
            title: 'reese',
            image: 'no image',
            description: 'some good reese chocolate',
        },
        {
            title: 'mars',
            image: 'no image',
            description: 'some good mars chocolate',
        },
        {
            title: 'orange',
            image: 'no image',
            description: 'some good orange chocolate',
        },
        {
            title: 'apple',
            image: 'no image',
            description: 'some good apple chocolate',
        },
    ];

    useEffect(() => {
        setData(dummyData);
    }, []);

    const handleFilter = input => {
        const filteredResult = [...dummyData].filter(data =>
            data.title.toLowerCase().includes(input.toLowerCase()),
        );
        setData(filteredResult);
    };

    return (
        <>
            <div className="search">
                <input
                    className="search-input"
                    placeholder="search"
                    type="text"
                    onChange={event => handleFilter(event.target.value)}
                />
            </div>

            <div className="container">
                {data.map((item, index) => (
                    <div className="card" key={index}>
                        <div className="card-text">{item.title}</div>
                        <img src={item.image} alt="" />
                        <div className="card-text">{item.description}</div>
                    </div>
                ))}
            </div>
        </>
    );
};
