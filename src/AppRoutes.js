import React from 'react';

import { Route, Routes } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

import client from './client'

import AlbumsList from './Components/AlbumsList';
import Album from './Components/Album';

const AppRoutes = () => {
     return (
        <BrowserRouter>
            <ApolloProvider client={client}>
                <Routes>
                    <Route path="/ac-dc-frontend">
                        <Route index element={<AlbumsList />} />
                    </Route>
            
                    <Route path="/ac-dc-frontend/albums">
                        <Route index element={<AlbumsList />} />
                        <Route strict exact path="/ac-dc-frontend/albums/:id" element={<Album />}/>
                    </Route>
                </Routes>
            </ApolloProvider>
        </BrowserRouter>
     );
 }

 export default AppRoutes;