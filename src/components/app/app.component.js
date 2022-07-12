import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './header/header.component';
import Footer from './footer/footer.component';
import AlbumsPage from '../../pages/albums/albums.page';

import './app.component.css'

const App = () => {
    return(
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/ac-dc-frontend/">
                    <Route index element={<AlbumsPage />} />
                </Route>
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;