import React from 'react';
import Header from "../Header/Header";
import Products from "../Product/Products";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/products/:id' element={<Products/>}/>
                <Route path='*' element={<Navigate to='/products/10066990'/>}/>
            </Routes>
        </>
    );
}

export default App;
