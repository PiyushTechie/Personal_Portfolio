import { useEffect, useState, useRef } from "react";

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";

const DecryptText = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  useEffect(() => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(intervalRef.current);
  }, [text]);

  return <span className={className}>{displayText}</span>;
};

export default DecryptText;