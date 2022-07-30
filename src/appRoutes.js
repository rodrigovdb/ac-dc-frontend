import { Layout, PageHeader } from 'antd';

import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';

import client from './common/client';
import AlbumsPage from './pages/albumsPage';
import Footer from './components/footer';

import './appRoutes.css'

const AppRoutes = () => {
    return(
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Layout className="appRoutes">
                    <PageHeader title="AC/DC" subTitle="Studio Albums" />

                    <Routes>
                        <Route path="/ac-dc-frontend/">
                            <Route index element={<AlbumsPage />} />
                        </Route>

                        <Route path="/ac-dc-frontend/albums">
                            <Route index element={<AlbumsPage />} />
                            {/*
                            <Route strict exact path="/ac-dc-frontend/albums/new" element={<AlbumsFormPage />}/>
                            <Route path="/ac-dc-frontend/albums/:id">
                            <Route index element={<AlbumsShowPage />} />
                            
                            <Route path="/ac-dc-frontend/albums/:id/songs">
                            <Route strict exact path="/ac-dc-frontend/albums/:id/songs/new" element={<SongsFormPage />}/>
                            </Route>
                        </Route> */}
                        </Route>
                    </Routes>

                    <Footer />
                </Layout>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default AppRoutes;