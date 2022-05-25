import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Todos } from './pages/index';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Todos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
