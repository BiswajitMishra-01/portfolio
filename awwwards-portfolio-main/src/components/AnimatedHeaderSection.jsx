import React, { useRef } from "react";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimatedHeaderSection = ({
  subTitle,
  title,
  titleLine2,
  text,
  textColor,
  withScrollTrigger = false,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            trigger: contextRef.current,
          }
        : undefined,
    });

    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });

    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: 200,
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);

  return (
    <div ref={contextRef}>
      {/* HEADER */}
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
        >
          <p
            className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}
          >
            {subTitle}
          </p>

          <div className="px-10">
            <h1 className={`uppercase ${textColor}`}>
              <span className="block whitespace-nowrap text-[clamp(3rem,8vw,8rem)] leading-none">
                {title}
              </span>

              <span className="block whitespace-nowrap text-[clamp(2.5rem,6vw,6rem)] leading-none mt-3">
                {titleLine2}
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className={`relative px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2" />

        <div className="py-12 sm:py-16">
  <div className="w-full md:w-[70%] text-left">
    <AnimatedTextLines
      text={text}
      className={`font-light uppercase value-text-responsive ${textColor}`}
    />
  </div>
</div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;