import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css"; // Import your styles for positioning

const App = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOpen(true);
  };

  const handleBackClick = () => {
    setIsProfileOpen(false);
  };

  return (
    <div className="app-container">
      {!isProfileOpen ? (
        <ChatView onProfileClick={handleProfileClick} />
      ) : (
        <ProfileView onBackClick={handleBackClick} />
      )}
    </div>
  );
};

const ChatView = ({ onProfileClick }: { onProfileClick: () => void }) => {
  return (
    <div className="chat-container">
      {/* Header with small profile picture */}
      <div className="chat-header">
        <motion.div
          className="profile-thumbnail"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={onProfileClick}
        >
          <img src="/path-to-small-profile.jpg" alt="Profile" />
        </motion.div>
        <div className="chat-title">
          <motion.h2 initial={{ y: 0 }} animate={{ y: 0 }}>
            Leonel Ngoya
          </motion.h2>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="chat-messages">
        <p>Hello LN, Have you seen the latest animation on Indev/ui?</p>
        <p>Yesss! Click on the profile picture to see the animation</p>
      </div>
    </div>
  );
};

const ProfileView = ({ onBackClick }: { onBackClick: () => void }) => {
  return (
    <motion.div
      className="profile-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      {/* Back button */}
      <button className="back-button" onClick={onBackClick}>
        Retour
      </button>

      {/* Profile details with animation */}
      <motion.div
        className="profile-picture-large"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1, transition: { duration: 0.5 } }}
      >
        <img src="/path-to-large-profile.jpg" alt="Profile" />
      </motion.div>

      {/* Profile Info */}
      <motion.div
        className="profile-info"
        initial={{ y: -50 }}
        animate={{ y: 0, transition: { duration: 0.5 } }}
      >
        <h2>Leonel Ngoya</h2>
        <p>Mobile: +237 6000000000</p>
        <p>Nom d'utilisateur: @ln_dev7</p>
        <p>Date de naissance: 20 Novembre</p>
      </motion.div>
    </motion.div>
  );
};

export default App;
