import React from "react"
import NavBar from "../components/navbar"
import Footer from "../components/footer";


export default function Layout({ children }) {
  return (
      <React.Fragment>
        <NavBar/>
            {children}
        <Footer/>
      </React.Fragment>
    
  )
}