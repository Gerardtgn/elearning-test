import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/connexion/LoginPage';
import NotFound from './components/pages/NotFound';
import RegisterPage from './components/pages/connexion/RegisterPage';
import Home from './components/pages/Home';
import { DashboardLayout } from './components/pages/dashboard/DashboardLayout';
import { TeacherDashboard } from './components/pages/dashboard/views/TeacherDashboard';
import PrivateRoute from './components/layout/PrivateRoute';
import { StudentDashboard } from './components/pages/dashboard/views/StudentDashboard';
import Cours from './components/pages/dashboard/views/teacher/cours/Cours';
import CreateCours from './components/pages/dashboard/views/teacher/cours/CreateCours';
import DetailCourse from './components/pages/dashboard/views/teacher/cours/DetailCourse';
import TravauxPratiques from './components/pages/dashboard/views/teacher/td/TravauxPratiques';
import CreateTD from './components/pages/dashboard/views/teacher/td/sections/CreateTd';
import Exercice from './components/pages/dashboard/views/teacher/exercices/Exercice';
import CreateExercice from './components/pages/dashboard/views/teacher/exercices/CreateExercice';
import StudentCours from './components/pages/dashboard/views/student/cours/StudentCours';
import NotificationDetail from './components/pages/dashboard/NotificationDetail';
import {AdminDashboard} from './components/pages/dashboard/views/AdminDashboard';
import PendingPage from './components/pages/PendingPage';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ServicePage from './components/pages/ServicePage';
import CoursPage from './components/pages/CoursPage';
import TDPage from './components/pages/TDPage';
import TeacherPage from './components/pages/TeacherPage';
import ArticleDetail from './components/pages/ArticleDetail';
import BlogPage from './components/pages/BlogPage';
import TeacherDetailPage from './components/pages/TeacherDetailPage';
import ContactPage from './components/pages/ContactPage';
function App() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage/>} />
        <Route path="/cours" element={<CoursPage/>} />
        <Route path="/td" element={<TDPage/>} />
        <Route path="/teacher" element={<TeacherPage/>} />
        <Route path="/detail-teacher" element={<TeacherDetailPage/>} />
        <Route path="/article" element={<BlogPage/>} />
        <Route path='/detail-article/:id' element={<ArticleDetail/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/pending-page' element={<PendingPage/>}/>
        <Route path="/dashboard/*" element={<PrivateRoute />}>
          <Route path="" element={<DashboardLayout />}>
            <Route
              index
              element={
                user && user.profile === 'enseignant' ? (
                  <TeacherDashboard />
                ) : user && user.profile === 'apprenant'?(
                  <StudentDashboard />
                ) : 
                <AdminDashboard/>
              }
            />
            {/* Section des cours */}
            <Route path="teacher/courses" element={<Cours />} />
            <Route path="student/courses" element={<Cours />} />
            <Route path="teacher/create-course" element={<CreateCours />} />
            <Route path='teacher/detail-cours/:uid' element={<DetailCourse />} />
            <Route path='student/detail-cours/:uid' element={<DetailCourse />} />
            {/* Section des Exercices */}
            <Route path='teacher/exercices' element={<Exercice />} />
            <Route path='student/exercices' element={<Exercice />} />
            <Route path='teacher/create-exercice' element={<CreateExercice />} />
            <Route path='student/create-exercice' element={<CreateExercice />} />

            {/* Section des notif */}
            <Route path='notifications/:uid' element={<NotificationDetail />} />
            <Route path='*' element={NotFound}/>
            
            {/* Ajoutez d'autres routes ici */}
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;