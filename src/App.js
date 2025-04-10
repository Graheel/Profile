import React from 'react';
import './App.css';
import profilePic from './profile pic.jpg';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">Graheel Upadhyay</h1>
          <p className="text-lg mt-1">B.Tech Student | MERN Stack Developer</p>
        </div>
      </header>

      <main className="main-container">
        {/* Left Side - Profile */}
        <div className="profile-section">
          <img src={profilePic} alt="Graheel Upadhyay" className="profile-image" />
        </div>

        {/* Center - Content */}
        <div className="content-section">
          <section>
            <h2>About Me</h2>
            <p>
              I am currently pursuing a Bachelor of Technology (B.Tech) degree at Chameli Devi Group of Institutions,
              Khandwa Road, Indore. I am in my 4th and final year, currently in the 8th semester. I am passionate about
              learning new technologies and enhancing my development skills.
            </p>
          </section>

          <section>
            <h2>Education</h2>
            <ul>
              <li>Class 1 to 8: St. Paul's Convent Sr. Sec. School, Ujjain</li>
              <li>Class 9 to 12: Mahadaji Scindhiya Higher Secondary School, Ujjain</li>
            </ul>
          </section>

          <section>
            <h2>Strengths & Weaknesses</h2>
            <p><strong>Strength:</strong> I enjoy exploring and learning new technologies.</p>
            <p><strong>Weakness:</strong> I tend to overthink minor issues.</p>
          </section>

          <section>
            <h2>Hobbies</h2>
            <ul>
              <li>Playing video games for relaxation and stress relief</li>
              <li>Solving the Rubik's Cube regularly</li>
            </ul>
          </section>
        </div>

        {/* Right Side - Tech + Projects + Contact + Social */}
        <div className="right-section">
          <section>
            <h2>Technical Skills</h2>
            <p>
              C, C++, HTML, CSS, JavaScript, and the full MERN stack (MongoDB, Express.js, React.js, Node.js)
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 border-b pb-1 mb-2">Projects</h2>
            <p className="leading-relaxed mb-4">
              As part of my major academic project, I developed <strong>Ibus E-Ticket</strong>, a full-featured MERN stack application. This platform allows users to conveniently book and manage bus tickets online. It includes features like user and driver authentication, admin panel, and route-based ticket booking.
            </p>
            <a
              href="https://i-bus-e-ticket.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-900 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-800 transition"
            >
              Visit Live Project 🚍
            </a>
          </section>

          {/* Contact & Socials */}
          <section id="contact" className="mt-10 contact-info">
            <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-900 pb-2 mb-4">
              Contact & Socials
            </h2>

            <div className="contact-grid">
              <a href="tel:6266306631" className="contact-link">
                <div className="icon-button"><FaPhoneAlt /></div>
                <span>6266306631</span>
              </a>

              <a href="mailto:graheelupadhyay@gmail.com" className="contact-link">
                <div className="icon-button"><FaEnvelope /></div>
                <span>graheelupadhyay@gmail.com</span>
              </a>

              <a href="https://www.instagram.com/graheelupadhyay/?__pwa=1#" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="icon-button"><FaInstagram /></div>
                <span>Instagram</span>
              </a>

              <a href="https://t.me/Graheel" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="icon-button"><FaTelegramPlane /></div>
                <span>Telegram</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-blue-900 text-white text-center p-4">
        &copy; {new Date().getFullYear()} Graheel Upadhyay. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
