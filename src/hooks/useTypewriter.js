import { useState, useEffect } from "react";

export const useTypewriter = (
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[loopNum % phrases.length];

    if (isDeleting) {
      if (text === "") {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }, 0);
      } else {
        timer = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (text === currentPhrase) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else {
        timer = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [
    text,
    isDeleting,
    loopNum,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return text;
};
