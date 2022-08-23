import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import StartupPage from './pages/StartupPage';
import TranslatePage from './pages/TranslatePage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';

function App() {
  const [ username, setUsername ] = useState("");

  const updateUsername = (newUsername) => {
    if(newUsername !== "")
      console.log("Welcome, " + newUsername + "!");
    else
      console.log("Logged out of " + username + "'s account.");

    setUsername(newUsername);
  }

  return (
    <>
      <Router>
        <Header user={username} />
          <Routes>
            <Route path="/">
              <Route index element={<StartupPage user={ username } updateUsername={ updateUsername } />}></Route>
              <Route path="translate" element={<TranslatePage user={ username }/>}></Route>
              <Route path="profile" element={<ProfilePage user={ username } updateUsername={ updateUsername } />}></Route>
            </Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
