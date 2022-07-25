import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';

import client from './common/client';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import AlbumsPage from './pages/albumsPage';
import AlbumsShow from './components/albums/show/albumsShow';

import './assets/stylesheets/main.scss';

const AppRoutes = () => {
    return(
        <ApolloProvider client={client}>
            <BrowserRouter>
                <div className="container mx-auto">
                    <Header />

                    <Routes>
                        <Route path="/ac-dc-frontend/">
                            <Route index element={<AlbumsPage />} />
                        </Route>

                        <Route path="/ac-dc-frontend/albums">
                            <Route index element={<AlbumsPage />} />

                            <Route path="/ac-dc-frontend/albums/:id">
                                <Route index element={<AlbumsShow />} />
                            </Route>
                        </Route>
                    </Routes>

                    <Footer />
                </div>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default AppRoutes;