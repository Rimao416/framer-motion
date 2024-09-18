import {
  motion,
  useTransform,
  useMotionValue,
  useAnimate,
} from "framer-motion";
import "./App.css";

function App() {
  const [scope, animate] = useAnimate();
  function sequence() {
    animate(scope.current, { x: [0, 100, 0, -100, 0] }, {
      repeat: Infinity,
      repeatType: "loop", // Utilisation de "loop" pour répéter le cycle complet
      duration: 2, // Durée d'une boucle complète
    });
  }

  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#a0d", "rgba(0,0,0,0)", "#0bf"]
  );

  return (
    <>
      <motion.div className="App" style={{ backgroundColor: background }}>
        <motion.div
          className="center"
          style={{ x }}
          ref={scope}
          onClick={sequence}
        ></motion.div>
      </motion.div>
    </>
  );
}

export default App;
