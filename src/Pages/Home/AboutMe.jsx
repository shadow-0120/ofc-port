import React, { useEffect, useRef, useState, Suspense, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";

// Memoized Model component to prevent unnecessary re-renders
const Model = memo(() => {
  const { scene, animations } = useGLTF("/models/model1.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      firstAction.play();
    }
  }, [actions]);

  return <primitive object={scene} scale={1} position={[0, -1, 0]} />;
});

Model.displayName = 'Model';

// Loading fallback for 3D model
const ModelLoader = () => (
  <div className="w-full h-full flex items-center justify-center bg-gray-800 rounded-2xl">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
  </div>
);

export default function AboutMe() {
  const ref = useRef(null);
  const faqRefs = useRef([]);
  const titleRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [isMobile, setIsMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animate title + FAQ items on view
  useEffect(() => {
    if (isInView) {
      // Animate title word by word
      if (titleRef.current) {
        const words = titleRef.current.innerText.split(" ");
        titleRef.current.innerHTML = words
          .map((w) => `<span class="inline-block opacity-0">${w}</span>`)
          .join(" ");

        gsap.to(titleRef.current.children, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.2,
        });
      }

      // Animate FAQ cards stagger
      gsap.fromTo(
        faqRefs.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
          delay: 0.8,
        }
      );
    }
  }, [isInView]);

  const faqs = [
    {
      q: "( 01 ) Development",
      a: "I do not merely write code — I compose digital symphonies. Each line is a note, each framework a brushstroke, weaving together React, Next.js, and Tailwind CSS into modern, responsive experiences.",
      tags: ["development", "web", "react"],
    },
    {
      q: "( 02 ) Design",
      a: "Design, for me, is not decoration — it is poetry in structure, rhythm in space. With a keen eye for harmony, I sculpt interfaces that whisper simplicity yet sing with impact.",
      tags: ["design", "ui/ux", "aesthetics"],
    },
    {
      q: "( 03 ) Creativity",
      a: "Creativity is my compass, guiding me through the unknown. I embrace the blank canvas with curiosity, blending logic with imagination.",
      tags: ["creativity", "ideas", "innovation"],
    },
    {
      q: "( 04 ) Collaboration",
      a: "No vision thrives in isolation. Collaboration is the heartbeat of creation, where voices unite and perspectives intertwine.",
      tags: ["teamwork", "communication", "growth"],
    },
    {
      q: "( 05 ) Vision",
      a: "I see the web not as a tool, but as a living canvas of possibility. My vision is to shape experiences that inspire, connect, and endure.",
      tags: ["future", "philosophy", "vision"],
    },
  ];

  return (
    <section
      ref={ref}
      className="w-full min-h-screen flex items-center justify-center text-white px-4 md:px-8 py-16 md:py-24 overflow-hidden relative"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-grid-lines opacity-10 pointer-events-none">
        <div className="grid-line-vertical left-1/4"></div>
        <div className="grid-line-vertical left-1/2"></div>
        <div className="grid-line-vertical left-3/4"></div>
        <div className="grid-line-horizontal top-1/3"></div>
        <div className="grid-line-horizontal top-2/3"></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: FAQ Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-gray-700 relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <h2
              ref={titleRef}
              className="text-3xl md:text-4xl font-bold mb-8 text-white tracking-tight"
            >
              About Me — FAQs
            </h2>

            <div className="space-y-5 relative z-10">
              {faqs.map((item, idx) => (
                <div
                  key={idx}
                  ref={(el) => (faqRefs.current[idx] = el)}
                  className="border border-gray-700/50 rounded-xl overflow-hidden transition hover:border-indigo-500/50 opacity-0"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === idx ? null : idx)
                    }
                    className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-200 hover:text-white px-4 py-4 transition"
                  >
                    <span>{item.q}</span>
                    <motion.div
                      animate={{ rotate: openIndex === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                      openIndex === idx
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4">
                      <p className="mt-2 text-gray-400 leading-relaxed">
                        {item.a}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-500/20"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: 3D Model */}
        <motion.div
          className="h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl shadow-xl overflow-hidden border border-gray-700"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Suspense fallback={<ModelLoader />}>
            <Canvas 
              camera={{ position: [0, 1, 5], fov: 45 }}
              dpr={[1, 2]} // Limit device pixel ratio for better performance
              performance={{ min: 0.5 }} // Reduce quality if performance is low
            >
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <pointLight position={[-5, -5, -5]} intensity={0.5} />
              <group rotation={[0, Math.PI / 4, 0]}>
                <Model />
              </group>
              <OrbitControls
                enableZoom={true}
                autoRotate
                autoRotateSpeed={1}
                enablePan={!isMobile}
                maxPolarAngle={Math.PI / 1.8} // Limit vertical rotation
                minDistance={3}
                maxDistance={10}
              />
            </Canvas>
          </Suspense>
        </motion.div>
      </div>

      <style jsx>{`
        .grid-grid-lines {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: repeat(12, 1fr);
        }

        .grid-line-vertical {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 10%,
            rgba(255, 255, 255, 0.1) 90%,
            transparent 100%
          );
        }

        .grid-line-vertical.left-1\/4 {
          left: 25%;
        }

        .grid-line-vertical.left-1\/2 {
          left: 50%;
        }

        .grid-line-vertical.left-3\/4 {
          left: 75%;
        }

        .grid-line-horizontal {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 10%,
            rgba(255, 255, 255, 0.1) 90%,
            transparent 100%
          );
        }

        .grid-line-horizontal.top-1\/3 {
          top: 33.33%;
        }

        .grid-line-horizontal.top-2\/3 {
          top: 66.66%;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
}
