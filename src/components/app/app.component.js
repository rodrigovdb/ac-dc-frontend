import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';

import client from '../../common/client';

import Header from './header/header.component';
import Footer from './footer/footer.component';
import AlbumsPage from '../../pages/albums/albums.page';

import './app.component.css'

const App = () => {
    return(
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/ac-dc-frontend/">
                        <Route index element={<AlbumsPage />} />
                    </Route>
                </Routes>

                <Footer />
           </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;