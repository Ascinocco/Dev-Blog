import React from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router';

import './app.css'

import NavBar from 'components/NavBar';

function App() {
  return (
    <Root>
      <NavBar />
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
