import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: { target: "#title-service-1", scrub: true },
    });
    gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: { target: "#title-service-2", scrub: true },
    });
    gsap.to("#title-service-3", {
      xPercent: 100,
      scrollTrigger: { target: "#title-service-3", scrub: true },
    });
    gsap.to("#title-service-4", {
      xPercent: -100,
      scrollTrigger: { target: "#title-service-4", scrub: true },
    });
  });

  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-32 text-2xl md:text-4xl lg:text-5xl">
      <div id="title-service-1" className="whitespace-nowrap">
        <p>Data Analyst</p>
      </div>

      <div
        id="title-service-2"
        className="flex flex-nowrap items-center justify-center gap-3 translate-x-16 whitespace-nowrap"
      >
        <p className="font-normal">Business Analyst</p>
        <div className="w-10 h-1 md:w-32 bg-gold shrink-0" />
        <p>Data Visualization</p>
      </div>

      <div
        id="title-service-3"
        className="flex flex-nowrap items-center justify-center gap-3 -translate-x-48 whitespace-nowrap"
      >
        <p>Dashboards</p>
        <div className="w-10 h-1 md:w-32 bg-gold shrink-0" />
        <p className="italic">Power Bi</p>
        <div className="w-10 h-1 md:w-32 bg-gold shrink-0" />
        <p>Python</p>
      </div>

      <div id="title-service-4" className="translate-x-48 whitespace-nowrap">
        <p>SQL</p>
      </div>
    </section>
  );
};

export default ServiceSummary;