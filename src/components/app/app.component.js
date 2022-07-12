import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './header/header.component';
import Footer from './footer/footer.component';

import './app.component.css'

const App:React.FC = () => {
    return(
        <BrowserRouter>
            <Header />
            <Footer />
        </BrowserRouter>
    );
}

export default App;