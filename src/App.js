import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './pages/Dialogs/Dialogs';
import News from './pages/News/News';
import Music from './pages/Music/Music';
import Settings from './pages/Settings/Settings';
import Profile from './pages/Profile/Profile';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
        <div className='myContent'>
          <Routes>
            <Route path="/profile"
              element={<Profile 
              state={props.state.profilePage} addPost={props.addPost} />} 
            />
            <Route path="/dialogs" 
              element={<Dialogs 
              state={props.state.messagesPage} addMessage={props.addMessage} />} 
            />
            <Route path="/news" 
              element={<News />} 
            />
            <Route path="/music" 
              element={<Music /> } 
            />
            <Route path="/settings" 
              element={<Settings />} 
            />
          </Routes>
        </div>
    </div>
    
  );
}

export default App;
