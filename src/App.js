import { Home } from 'components/home/home';
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import React from 'react';
import { Table } from 'components/table-react/table';
import { Hackerrank } from 'components/hackerrank/hackerrank';
import MyForm from 'components/forms/forms';
import { NotFoundPage } from 'components/not-found-page/notFoundPage';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/table" element={<Table />} />
                <Route path="/hack" element={<Hackerrank />} />
                <Route path="/form" element={<MyForm />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
