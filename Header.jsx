// import React from 'react'


import SecondFooter from "./components/SecondFooter";

const Header = () => {
  return (
    // jsx child must have one parent element
    // this is react fragment
    <div className = "header">
    <h1>this is header</h1>
    <p>this is para</p>
    <SecondFooter/>
    </div>
  )
}


const Footer = () => {
  return (
    <div>this is Footer</div>
  )
}


//  exporting components (if we have multiple function deafult will specifies which function we r exporting)
// export default Header


// multiple exporting object exporting
export {Header, Footer}