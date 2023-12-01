import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Auth from './components/Auth';
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Footer from './components/Footer'
import { useContext } from 'react';
import { tokenAuthContest } from './contexts/AuthToken';

function App() {
  const {isAuth} = useContext(tokenAuthContest)
  return (
    <div className='App'>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/register'} element={<Auth register />} />
        <Route path={'/login'} element={<Auth login/>} />
        <Route path={'/dashboard'} element={isAuth? <Dashboard />:<Home/>} />
        <Route path={'/projects'} element={isAuth?<Project />:<Auth login/>} />
        <Route path={'/*'} element={<Navigate to={<Home/>}/>}/>
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
