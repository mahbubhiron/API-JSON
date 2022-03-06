import React from 'react';
import './App.css';
import User from './Componants/Users/User';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from './Componants/PageNotFound/NotFound';
import FriendDetails from './Componants/FriendsDetails/FriendDetails';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/user' element={<User/>} />
          <Route path='/friend/:userId' element={<FriendDetails/>} />
          <Route exact path='/' element={<User/>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
