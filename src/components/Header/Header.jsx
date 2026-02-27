import React from "react";
import { motion } from "framer-motion";
import "./Header.css";

function Header() {
  return (
    <header id="home" className="header">
      <div className="background-glow" />

      <div className="content">
        <img src="/logo.png" alt="Shalini Logo" className="logo" />

        <motion.p
          className="intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          React Native Engineer
        </motion.p>

        <motion.h1
          className="name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Shalini Bhatt
        </motion.h1>

        <motion.p
          className="tagline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Building production-scale mobile applications with 1L+ downloads.
          Specialized in performance optimization, CI/CD automation, and
          scalable React Native architecture.
        </motion.p>

        <motion.div
          className="cta-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="#projects" className="cta-btn primary">
            View My Work
          </a>

          <a
            href="/Shalinii_Bhatt_Resume.pdf"
            download="Shalini_Bhatt_Resume.pdf"
            className="cta-btn secondary"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
