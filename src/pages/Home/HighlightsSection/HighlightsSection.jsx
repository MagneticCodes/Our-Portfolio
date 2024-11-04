import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Marquee from "react-fast-marquee";

const HighlightsSection = () => {
  const countersRef = useRef([]);

  const clientLogs = [
    {
      id: 1,
      logo: "https://eleks.com/wp-content/uploads/iaop-home-award.svg",
      desc: "We build lasting partnerships with our clients",
    },
    {
      id: 2,
      logo: "https://eleks.com/wp-content/uploads/london-design-home-award.svg",
      desc: "We build lasting partnerships with our clients",
    },
    {
      id: 3,
      logo: "https://eleks.com/wp-content/uploads/cyber-security-home-award.svg",
      desc: "We build lasting partnerships with our clients",
    },
    {
      id: 4,
      logo: "https://eleks.com/wp-content/uploads/stevie-home-award.svg",
      desc: "We build lasting partnerships with our clients",
    },
    {
      id: 5,
      logo: "https://eleks.com/wp-content/uploads/clutch-home-award.svg",
      desc: "We build lasting partnerships with our clients",
    },
    {
      id: 6,
      logo: "https://eleks.com/wp-content/uploads/outsourcing-verband-home-award.svg",
      desc: "We build lasting partnerships with our clients",
    },
    {
      id: 7,
      logo: "https://eleks.com/wp-content/uploads/webby-home-award.svg",
      desc: "We build lasting partnerships with our clients",
    },
    {
      id: 8,
      logo: "https://eleks.com/wp-content/uploads/webby-home-award.svg",
      desc: "We build lasting partnerships with our clients",
    },
  ];

  useEffect(() => {
    countersRef.current.forEach((counter) => {
      if (counter) {
        const targetValue = counter.getAttribute("data-target");
        gsap.to(counter, {
          duration: 2,
          ease: "power2.out",
          innerText: targetValue,
          snap: "innerText",
          onUpdate: () => {
            counter.textContent = Math.ceil(counter.textContent);
          },
          onComplete: () => {
            counter.innerHTML = `${counter.textContent}<span class="text-white font-thin px-">+</span>`;
          },
        });
      }
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white py-40 rounded-lg shadow-lg">
      <div className="w-[60%] mx-auto">
        <div className="flex gap-10">
          <div>
            <h2
              className="text-[16px] font-thin mb-4 tracking-widest h-[20px]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Company highlights
            </h2>
            <p className="text-[32px] font-serif mb-4">
              We build lasting partnerships with our clients
            </p>
          </div>
          <div className="w-[400px] border-t-2 border-gray-700 pt-6 grid grid-cols-2 gap-4">
            {[
              { target: "1000", label: "projects delivered" },
              { target: "120", label: "active clients and partnerships" },
              { target: "30", label: "years on the market" },
              { target: "20", label: "offices and delivery centres globally" },
            ].map((item, index) => (
              <div key={index}>
                <div
                  className="text-[56px] font-thin"
                  ref={(el) => (countersRef.current[index] = el)}
                  data-target={item.target}
                >
                  0
                </div>
                <div className="text-[15px] font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-16">
        <Marquee>
          {clientLogs.map((client) => (
            <img
              key={client.id}
              src={client.logo}
              alt={`Client ${client.id}`}
              className="w-32 h-auto mx-4"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HighlightsSection;
