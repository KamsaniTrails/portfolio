import React, { useState, useEffect } from 'react';

export const BlurFade = ({
  children,
  className = '',
  delay = 0,
  yOffset = 8,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : 'blur(6px)',
        transform: isVisible ? 'translateY(0px)' : `translateY(${yOffset}px)`,
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, filter 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default BlurFade;
