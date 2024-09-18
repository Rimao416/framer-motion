import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <motion.div className="center"
        initial={{scale:0}}
        animate={{scale:1, rotate:360}}
        transition={{duration:0.5,
          delay:1,
        }}
        ></motion.div>
      </div>
    </>
  );
}

export default App;
