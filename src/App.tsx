import { motion,AnimatePresence } from "framer-motion";
import "./App.css";
import { useState } from "react";

const logos = [
  { name: "Indev/ui", description: "A fun collection of small, well-coded components to streamline your development process.", date: "May 2024", logo: "🛠️" },
  { name: "Slack", description: "A business communication platform by Slack Technologies.", date: "August 2013", logo: "💬" },
  { name: "Linear", description: "A software development tool that helps you manage projects and track bugs.", date: "February 2020", logo: "📈" },
  { name: "Spotify", description: "A Swedish audio streaming service launched in 2008.", date: "October 2008", logo: "🎵" },
];

const App = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container">
      {/* Button to trigger layout change */}
      <motion.div 
        className="toggle-button" 
        onClick={toggleExpand} 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isExpanded ? '↩️ Collapse' : '↔️ Expand'}
      </motion.div>

      {/* Animate layout change */}
      <motion.div
        className={`logo-container ${isExpanded ? 'list-view' : 'grid-view'}`}
        layout
        transition={{ duration: 0.6, type: 'spring' }}
      >
        <AnimatePresence>
          {logos.map((item, index) => (
            <motion.div 
              className="logo-item"
              key={index}
              layout
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="logo-icon">
                {item.logo}
              </motion.div>
              {isExpanded && (
                <motion.div className="logo-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <small>{item.date}</small>
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};


export default App;
