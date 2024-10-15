import React, { useEffect, useState, useRef } from "react";

const SectionWrapper = ({
  children,
  className,
  threshold = 0.05,
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
      className={`p-12 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
