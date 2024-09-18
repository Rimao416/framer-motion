import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <motion.div className="center" 
          initial={{ backgroundSize: "100%" }}
          animate={{ backgroundSize: "200%" }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 40,
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 0.2,


          }}
        ></motion.div>
      </div>
    </>
  );
}

export default App;
