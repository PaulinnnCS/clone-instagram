import { useEffect, useRef, useState } from "react";
import screenShot1 from "../assets/screenshot1.png";
import screenShot2 from "../assets/screenshot2.png";
import screenShot3 from "../assets/screenshot3.png";
import screenShot4 from "../assets/screenshot4.png";
import { gsap } from "gsap";

function ScreenShots() {
  const refScreenShot1 = useRef();
  const refScreenShot2 = useRef();
  const refScreenShot3 = useRef();
  const refScreenShot4 = useRef();

  const listScreenShot = [
    refScreenShot1,
    refScreenShot2,
    refScreenShot3,
    refScreenShot4,
  ];
  const [currentScreenShot, setCurrentScreenShot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(currentScreenShot);
      gsap.to(listScreenShot[currentScreenShot].current, {
        opacity: 0,
        duration: 1,
      });

      const nextScreenShot =
        currentScreenShot === listScreenShot.length - 1
          ? 0
          : currentScreenShot + 1;

      gsap.fromTo(
        listScreenShot[nextScreenShot].current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );

      setCurrentScreenShot(nextScreenShot);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentScreenShot]);

  return (
    <>
      <img
        ref={refScreenShot1}
        className="absolute w-[258px] left-[115px] top-[27px] z-[4]"
        src={screenShot1}
        alt="screenshot"
      />
      <img
        ref={refScreenShot2}
        className="absolute w-[258px] left-[115px] top-[27px] z-[3]"
        src={screenShot2}
        alt="screenshot"
      />
      <img
        ref={refScreenShot3}
        className="absolute w-[258px] left-[115px] top-[27px] z-[2]"
        src={screenShot3}
        alt="screenshot"
      />
      <img
        ref={refScreenShot4}
        className="absolute w-[258px] left-[115px] top-[27px] z-[1]"
        src={screenShot4}
        alt="screenshot"
      />
    </>
  );
}

export default ScreenShots;
