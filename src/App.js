import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Auth from './components/Auth';
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/register'} element={<Auth register />} />
        <Route path={'/login'} element={<Auth login/>} />
        <Route path={'/dashboard'} element={<Dashboard />} />
        <Route path={'/projects'} element={<Project />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
