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
        
        style={{x}}
        animate={{x:[-100,0,100],
          transition:{
            repeat:Infinity,
            repeatType:'reverse',
            repeatDelay:1,
          
          }
        }}
        ></motion.div>
      </motion.div>
    </>
  );
}

export default App;
