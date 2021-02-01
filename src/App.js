import React from 'react'
import './App.css'
import Home from './components/home'
import {MovieProvider} from './components/context'

const App=()=>{


  return(
    <MovieProvider>
    <div>
      <Home/>
    </div>
    </MovieProvider>
  )
}
export default App;