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
import PostSubmit from './components/PostSubmit';
import DemoForm from './components/DemoForm';
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
                <Route path="/" element={<HomePage />} />
                <Route path="/page-one" element={<PageOne />} />
                <Route path="/page-two" element={<PageTwo />} />
                <Route path="/page-three" element={<PageThree />} />
                <Route path="/contact-form" element={<ContactForm />} />
                <Route path="/post-detail/:id" element={<PostDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/posts" element={<PostSubmit />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/demo-form" element={<DemoForm />} />
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
