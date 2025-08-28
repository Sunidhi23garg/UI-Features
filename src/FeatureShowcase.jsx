import { useState, useEffect } from "react";
import "./App.css";

const features = [
  {
    id: 1,
    title: "Feature No.1 -",
    heading: "Seamless Onboarding",
    description: [
      "Set up your account in just a few clicks with a simple and intuitive flow that removes unnecessary steps.",
      "Avoid complicated forms and lengthy approvals — everything is optimized for speed and ease of use.",
      "Get a guided walkthrough tailored for first-time users so you never feel lost during setup.",
      "Enjoy a personalized onboarding experience that adapts based on your preferences and goals."
    ],
    image: "/images/feature1.png"
  },
  {
    id: 2,
    title: "Feature No.2 -",
    heading: "Smart Notifications",
    description: [
      "Receive instant alerts about important updates so you never miss critical information.",
      "Customize which types of notifications you want to receive and silence the rest for a distraction-free workflow.",
      "Take advantage of silent mode or scheduled delivery to stay focused during meetings or personal time.",
      "Stay consistently informed without being overwhelmed, thanks to intelligent notification management."
    ],
    image: "/images/feature2.png"
  },
  {
    id: 3,
    title: "Feature No.3 -",
    heading: "Interactive Dashboard",
    description: [
      "Experience a clean, minimal, and clutter-free dashboard that puts essential data front and center.",
      "Monitor real-time analytics and generate instant reports without needing external tools.",
      "Drag, drop, and rearrange widgets to create a personalized dashboard suited to your workflow.",
      "Access your data anytime, anywhere, on any device, with automatic syncing across platforms."
    ],
    image: "/images/feature3.png"
  },
  {
    id: 4,
    title: "Feature No.4 -",
    heading: "Dark Mode Experience",
    description: [
      "Toggle effortlessly between light and dark themes to match your working environment.",
      "Enjoy an optimized viewing experience that reduces eye strain, especially in low-light conditions.",
      "Let the app automatically switch modes based on your system theme or time of day settings.",
      "Save battery life on OLED devices with a darker, more energy-efficient interface."
    ],
    image: "/images/feature4.png"
  },
  {
    id: 5,
    title: "Feature No.5 -",
    heading: "Secure Payments",
    description: [
      "Choose from multiple trusted payment gateways for quick and seamless transactions.",
      "Complete purchases in seconds using one-tap checkout with securely saved cards or wallets.",
      "Enjoy full protection with end-to-end encryption ensuring your financial data remains private.",
      "Download invoices instantly for hassle-free record keeping and expense management."
    ],
    image: "/images/feature5.png"
  }
];


export default function FeatureShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="showcase">
      <div className="showcase-left">
        <h3 className="feature-title">{features[active].title}</h3>
        <h2 className="feature-heading">{features[active].heading}</h2>
        <ul className="feature-desc">
          {features[active].description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        <div className="arrows">
          <button onClick={() => setActive((active - 1 + features.length) % features.length)}>←</button>
          <button onClick={() => setActive((active + 1) % features.length)}>→</button>
        </div>
      </div>

      <div className="showcase-phone">
        <img src={features[active].image} alt="Phone feature" />
      </div>

      <div className="showcase-right">
        <h3>Feature Showcase</h3>
        {features.map((f, i) => (
          <div
            key={f.id}
            onClick={() => setActive(i)}
            className={`feature-item ${active === i ? "active" : ""}`}
          >
            Feature {f.id}: {f.heading}
          </div>
        ))}
      </div>
    </section>
  );
}
