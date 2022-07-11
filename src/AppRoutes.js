import React from 'react';

import { Route, Routes } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

// This is the ApolloClient configured
import client from './client'

import AlbumsList from './Components/AlbumsList';
import ShowAlbum from './Components/ShowAlbum';
import AlbumForm from './Components/AlbumForm';

export default function AppRoutes() {
     return (
        <BrowserRouter>
            <ApolloProvider client={client}>
                <Routes>
                    <Route path="/ac-dc-frontend">
                        <Route index element={<AlbumsList />} />
                    </Route>
            
                    <Route path="/ac-dc-frontend/albums">
                        <Route index element={<AlbumsList />} />
                        <Route strict exact path="/ac-dc-frontend/albums/new" element={<AlbumForm />}/>
                        <Route strict exact path="/ac-dc-frontend/albums/:id" element={<ShowAlbum />}/>
                    </Route>
                </Routes>
            </ApolloProvider>
        </BrowserRouter>
     );
 }