import { motion, useAnimate } from "framer-motion";
import "./App.css";

function App() {
  const [scope, animate] = useAnimate();
  const [appScope, animateApp] = useAnimate(); // Pour l'élément App

  // Fonction qui démarre les deux animations
  function sequence() {
    // Animation de la rotation (élément blanc)
    animate(
      scope.current,
      { rotate: [0, 180] },
      {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
      }
    );

    // Animation du background (élément App)
    animateApp(
      appScope.current,
      { backgroundColor: ["#0af", "rgba(0,0,0,0)", "#fa0"] },
      {
        repeat: Infinity,
        duration: 2,
      }
    );
  }

  return (
    <>
      <motion.div className="App" ref={appScope}>
        <motion.div
          className="center"
          ref={scope}
          onClick={sequence} // L'animation démarre sur le clic
        ></motion.div>
      </motion.div>
    </>
  );
}

export default App;
