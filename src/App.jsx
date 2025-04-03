import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router'

//Import of pages
import MainLayout from './MainLayout';
import Index from './pages/Index'
import Logic from './pages/Logic'
import Equivalences from './pages/Equivalences'
import Sets from './pages/Sets'
import Successions from './pages/Successions'
import Count from './pages/Count'
import Subpage1 from './pages/subpages/Subpage1'
import Subpage2 from './pages/subpages/Subpage2'
import Subpage3 from './pages/subpages/Subpage3'


function App() {

  return (
      <MainLayout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/logic" element={<Logic />} />
          <Route path="/equivalences" element={<Equivalences />} />
          <Route path="/sets" element={<Sets />} />
          <Route path="/successions" element={<Successions />} />
          <Route path="/count" element={<Count />} />
          <Route path="/page1/subpage1" element={<Subpage1 />} />
          <Route path="/page1/subpage2" element={<Subpage2 />} />
          <Route path="/page1/subpage3" element={<Subpage3 />} />
        </Routes>
      </MainLayout>
  )
}

export default App
