import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  return (
    <>
      <div className="App">
        <motion.div className="center" onTap={() => setIsVisible(!isVisible)}>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                className="sub__center"
                initial={{ opacity: 0,scale:0.75 }}
                animate={{opacity:1,scale:1}}
                exit={{opacity:0,scale:0}}
                // Cette partie est purement pédagogique
                transition={{
                  bounce:5,
                  ease:"easeIn",
                  duration:0.5,

                }}
              ></motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}

export default App;
