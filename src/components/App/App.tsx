import React from 'react';
import Header from "../Header/Header";
import AppRouter from "./AppRouter";
import OrderInfo from "../OrderInfo/OrderInfo";

function App() {
    return (
        <>
            <Header/>
            <AppRouter/>
            <OrderInfo/>
        </>
    );
}

export default App;
