import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Product from "../Product/Product";

enum RouteName {
    PRODUCT_BY_ID = '/product/:id'
}

const AppRouter = () => {
    return (
        <Routes>
            <Route path={RouteName.PRODUCT_BY_ID} element={<Product/>}></Route>
        </Routes>
    );
};

export default AppRouter;