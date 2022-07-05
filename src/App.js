import './App.css';
import { Route, Switch, Routes } from "react-router-dom";

import AlbumsList from './Components/AlbumsList';
import Album from './Components/Album';

function App(){
  return(
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<AlbumsList />}/>
        <Route strict exact path="/:id" element={<Album />}/>
      </Routes>
    </div>
  )
}

export default App;