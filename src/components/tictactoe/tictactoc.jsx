import React, { useState, useEffect } from "react";

export const tictactoe = () => {
    const [name] = useState('Jordan');
    const [items, setItems] = useState([
        { text: 'Item 1', completed: false },
        { text: 'Item 2', completed: false },
        { text: 'Item 3', completed: false },
    ]);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleClick = () => {
        alert('hello world');
    };

    useEffect(() => {
        return () => {};
    }, []);

    const handleToggleCompleted = index => {
        // setItems(
        //     items.map((item, i) =>
        //         i === index ? {...item, completed: !item.completed} : item
        //     )
        // );

        setItems(prev =>
            prev.map((item, i) =>
                i === index
                    ? {
                          ...item,
                          completed: !item.completed,
                      }
                    : item,
            ),
        );
    };

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;

        async function getData() {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch('https://meowfacts.herokuapp.com/', { signal });
                if (!response.ok) {
                    throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
                }
                const json = await response.json();
                setData(json);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        }

        getData();

        // cleanup: abort fetch if unmounted
        return () => controller.abort();
    }, []);

    return (
        <div className="container">
            <h1>Hello, {name}!</h1>

            {loading && <p>Loading…</p>}
            {error && <p className="error">Error: {error}</p>}

            {!loading && !error && data && (
                <div className="fact">
                    {/* based on the API, data.data is an array of strings */}
                    <p>{data.data?.[0]}</p>
                </div>
            )}
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => handleToggleCompleted(index)}
                        />
                        <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                            {item.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
