import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"
import Header from './Header'
import Footer from './Footer'
import './css/tailwind.css'

const App = () => {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <Header />
        <div className="content-wrapper">
          <Hello />
        </div>
        <Footer />
      </div >
    </div >
  )
};

ReactDOM.render(<App />, document.getElementById("app"))