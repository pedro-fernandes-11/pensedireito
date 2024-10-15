import React, { useEffect, useState, useRef } from "react";

const SectionWrapper = ({
  children,
  className,
  threshold = 0.1, // Increase threshold for better detection on smaller screens
  delay = 100,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold, delay]);

  return (
    <div
      ref={sectionRef}
      className={`py-12 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
