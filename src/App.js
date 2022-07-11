import './App.css';
import { Route, Routes } from "react-router-dom";

import AlbumsList from './Components/AlbumsList';
import Album from './Components/Album';

/*
          <Route strict exact path="/ac-dc-frontend/" element={<AlbumsList />}/>
          <Route strict exact path="/ac-dc-frontend/albums/new" element={form}/>
          <Route strict exact path="/ac-dc-frontend/albums/:id" element={<Album />}/>
*/

function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<AlbumsList />} />
        </Route>
        <Route path="/albums">
          <Route index element={<AlbumsList />} />
          <Route strict exact path="/albums/:id" element={<Album />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;