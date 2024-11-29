import { useEffect, useState, useContext } from 'react'
import { GlobalContextProvider, useGlobalContext } from "./contexts/GlobalContext"
import './App.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'


function App() {

  return (
    <>
      <GlobalContextProvider>


        <AppHeader />
        <AppMain />



      </GlobalContextProvider>
    </>
  )
}

export default App



