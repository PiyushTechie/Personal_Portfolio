import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const CustomCursor = () => {
  const mainCursor = useRef(null);
  const secondaryCursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    if (typeof navigator !== "undefined" && "ontouchstart" in window) {
      return;
    }

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 2;
      positionRef.current.mouseY = mouseY - secondaryCursor.current.clientHeight / 2;

      if (mainCursor.current) {
        mainCursor.current.style.transform = `translate3d(${mouseX - mainCursor.current.clientWidth / 2}px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);

      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;

        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += positionRef.current.distanceX;
          positionRef.current.destinationY += positionRef.current.distanceY;
        }
      }

      if (secondaryCursor.current) {
        secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }
    };

    followMouse();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(positionRef.current.key);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div 
        ref={mainCursor}
        className="fixed top-0 left-0 w-3 h-3 bg-sky-500 rounded-full pointer-events-none z-[9999] hidden md:block"
      />
      
      <div 
        ref={secondaryCursor}
        className="fixed top-0 left-0 w-8 h-8 border border-sky-500 rounded-full pointer-events-none z-[9998] hidden md:block opacity-60"
      />
    </>,
    document.body
  );
};

export default CustomCursor;