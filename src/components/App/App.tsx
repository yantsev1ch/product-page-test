import React from 'react';
import Header from "../Header/Header";
import Products from "../Product/Products";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path='/products/:id' element={<Products/>}></Route>
            </Routes>
        </>
    );
}

export default App;
