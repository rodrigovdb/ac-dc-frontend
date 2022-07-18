import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';

import client from '../../common/client';

import Header from './header/header.component';
import Footer from './footer/footer.component';
import AlbumsPage from '../../pages/albums/albums.page';
import AlbumsFormPage from '../../pages/albums/albums-form.page';
import AlbumsShowPage from '../../pages/albums/albums-show.page';
import SongsFormPage from '../../pages/songs/songs-form.page';

import './app.component.css'

const App = () => {
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
                            <Route strict exact path="/ac-dc-frontend/albums/new" element={<AlbumsFormPage />}/>

                            <Route path="/ac-dc-frontend/albums/:id">
                                <Route index element={<AlbumsShowPage />} />

                                <Route path="/ac-dc-frontend/albums/:id/songs">
                                    <Route strict exact path="/ac-dc-frontend/albums/:id/songs/new" element={<SongsFormPage />}/>
                                </Route>
                            </Route>
                        </Route>
                    </Routes>

                    <Footer />
                </div>
           </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;