import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFound';
import ServicesPage from './components/ServicesPage';


export default function AppRouter() {
  return (
    <Router>

        <Routes>

            <Route path='/' element={
                <HomePage />
            } />

            <Route path='contact' element={
                <ContactPage />
            } />

            <Route path='services' element={
                <ServicesPage />
            } />

            <Route path='*' element={
              <NotFoundPage />
            } />


        </Routes>
    
    </Router>
  )
}
