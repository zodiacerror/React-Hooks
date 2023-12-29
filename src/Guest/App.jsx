import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';

const App = () => {
    return (
        <Routes>
            <Route path='/Registration' element={<Registration />} />
            <Route path='/Login' element={<Login/>} />
        </Routes>
    )
}
export default App