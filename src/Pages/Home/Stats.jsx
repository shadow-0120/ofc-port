import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const stats = [
    { number: 4, suffix: "+", label: "Years Experience" },
    { number: 25, suffix: "+", label: "Projects Completed" },
    { number: 10, suffix: "+", label: "Happy Clients" },
    { number: 5, suffix: "+", label: "Awards & Certifications" },
  ];

  const sectionRef = useRef(null);
  const numberRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create ScrollTrigger for the entire section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          setIsVisible(true);
          // Animate each counter with a more reliable approach
          numberRefs.current.forEach((el, i) => {
            if (el) {
              const target = stats[i].number;
              const suffix = stats[i].suffix;
              
              // Use a custom counter animation
              let current = 0;
              const increment = target / 60; // 60 frames for smooth animation
              
              const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(counter);
                }
                el.innerText = Math.floor(current) + suffix;
              }, 16); // ~60fps
            }
          });
        },
        once: true
      });

      // Animate section title
      gsap.from(".section-title", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Animate labels
      gsap.utils.toArray(".stat-label").forEach((label, i) => {
        gsap.from(label, {
          y: 30,
          opacity: 0,
          delay: i * 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-3xl md:text-4xl font-serif text-center text-white mb-12">
          MY ACHIVEMENTS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span
                ref={(el) => (numberRefs.current[index] = el)}
                className="text-4xl md:text-5xl font-bold text-white font-serif"
              >
                0{item.suffix}
              </span>
              <span className="stat-label mt-2 text-sm md:text-base text-gray-400 font-light  tracking-wide uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
