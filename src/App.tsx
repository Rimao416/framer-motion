import { motion,useTransform,useMotionValue } from "framer-motion";
import "./App.css";

function App() {
  const x=useMotionValue(0)
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#a0d", "rgba(0,0,0,0)", "#0bf"]
);


  
  return (
    <>
      <motion.div className="App"
      style={{backgroundColor:background}}
      >
        <motion.div className="center"
        drag="x"
        style={{x}}
        whileTap={{cursor:"grabbing"}}
        dragConstraints={{ right: 0, left: 0 }}
        ></motion.div>
      </motion.div>
    </>
  );
}

export default App;
