import { Home } from 'components/home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import { Table } from 'components/table-react/table';
import { Hackerrank } from 'components/hackerrank/hackerrank';
import MyForm from 'components/forms/forms';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/ero-react-interview" element={<Home />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/table" element={<Table />} />
                <Route path="/hack" element={<Hackerrank />} />
                <Route path="/form" element={<MyForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
