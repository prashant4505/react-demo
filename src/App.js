import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import HomePage from './components/HomePage';
import PageOne from './components/PageOne';  // Add your components for different pages
import PageTwo from './components/PageTwo';  // Add your components for different pages
import PageThree from './components/PageThree';
import ContactForm from './components/ContactForm';
import PostDetail from './components/PostDetail';
import About from './components/About';
import Footer from './components/Footer';
import Service from './components/Service';
import Blog from './components/Blog';
import Portfolio from './components/Portfolio';
import Demo from './components/Demo';
// import logo from './logo.svg';

function App() {
  return (
    <Router> {/* Wrap your app with Router to enable routing */}
      <div className="App">
        <Header />
        <div className="row content-section">
          <div className="col-12 col-md-2 leftSidebar">
            <LeftSidebar />
          </div>
          <div className="col-12 col-md">
            <main className="main">
              <Routes>
                <Route path="/" element={<HomePage />} /> {/* Default route */}
                <Route path="/page-one" element={<PageOne />} /> {/* First page route */}
                <Route path="/page-two" element={<PageTwo />} /> {/* Second page route */}
                <Route path="/page-three" element={<PageThree />} /> {/* third page route */}
                <Route path="/contact-form" element={<ContactForm />} /> {/* Contact form route */}
                <Route path="/post-detail/:id" element={<PostDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/demo" element={<Demo />} />
              </Routes>
            </main>
          </div>
          <div className="col-12 col-md-2 rightSidebar">
            <RightSidebar />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
