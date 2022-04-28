import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles.css"
import Company from './Components/Company';
import Banner from './Components/Banner';
import Restaurant from "./Components/Restaurant"
import Footer from './Components/Footer';


const App = () => {
  return (
    <>
       <Company/>
       <Banner/>       
       <Restaurant/>
        <Footer/>       
    </>
  )
}

export default App