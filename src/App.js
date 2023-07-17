import React, { useRef } from "react";
import "./App.css";
import useWebAnimations, {zoomOutRight} from "@wellyshen/use-web-animations";

function App() {
  // const targetRef = useRef(null);
  const { ref, playState, getAnimation } = useWebAnimations({...zoomOutRight})
  //   keyframes: [
  //     { transform: "translate(0,0)" },
  //     { transform: "translate(600px,100px)" },
  //   ],
  //   animationOptions: {
  //     delay: 500,
  //     duration: 1000,
  //     iterations: 500,
  //     direction: "alternate",
  //     easing: "ease-in-out",
  //   },
    
  // });

  const pauseAnimation = () => {
    const animation = getAnimation();
    if (animation) {
      animation.pause();
    }
  };

  const playAnimation = () => {
    const animation = getAnimation();
    if (animation) {
      animation.play();
    }
  };

  return (
    <div>
      <div className="target" ref={ref}>
        Hello, good morning
      </div>
      <div>
        <div>Play state: {playState}</div>
        <button onClick={pauseAnimation}>Pause</button>
        <button onClick={playAnimation}>Play</button>
      </div>
    </div>
  );
}

export default App;
