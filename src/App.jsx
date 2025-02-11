import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { BookOpen, Users, Video, Award, ArrowRight, ClipboardList, RedoDot, FileText, Check, Clock, Star, BookOpenCheck, VideoIcon, Download } from 'lucide-react';
import LoginPage from './components/pages/connexion/LoginPage';
import NotFound from './components/pages/NotFound';
import RegisterPage from './components/pages/connexion/RegisterPage';
import Home from './components/pages/Home';


function App() {
  return (
    <Router>    
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes >
    </Router>
  );
}

export default App;