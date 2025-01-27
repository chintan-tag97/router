

// Import necessary libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Define the components for different pages
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

// Create a Header component
function Header() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/contact" style={styles.link}>Contact</Link>
    </nav>
  );
}

// Main App component
function Main() {
  return (
    <Router>
      {/* Add the Header */}
      <Header />

      {/* Define routes for the pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

// Basic styles for navigation
const styles = {
  nav: {
    background: "#282c34",
    padding: "10px",
    display: "flex",
    justifyContent: "space-around",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
};

// Export the App component
export default Main;
