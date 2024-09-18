import { motion } from "framer-motion";
import "./App.css";
import { useState } from "react";

interface Aspect {
  width: number;
  height: number;
}

function App() {
  const [aspect, setAspect] = useState<Aspect>({
    width: 200,
    height: 2,
  });

  const onWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAspect((prev) => ({
      ...prev,
      width: Number(e.target.value),
    }));
  };

  const onHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAspect((prev) => ({
      ...prev,
      height: Number(e.target.value),
    }));
  };

  return (
    <>
      <div className="App">
        <motion.div
          className="center"
          animate={{
            width: aspect.width + "px",
            height: aspect.height * 100 + "px",
          }}
          transition={{
            type: "spring",

            stiffness: 50,
            damping: 10,
            // delay: 0.5,
          }}
          style={{
            backgroundColor: "lightblue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Contenu
        </motion.div>
        <div className="top">
          <input
            type="number"
            placeholder="Hauteur (ratio)"
            defaultValue={aspect.height}
            onChange={onHeightChange}
          />
          <input
            type="number"
            placeholder="Largeur"
            defaultValue={aspect.width}
            onChange={onWidthChange}
          />
        </div>
      </div>
    </>
  );
}

export default App;
