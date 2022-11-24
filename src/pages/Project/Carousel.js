import React, { useState } from "react";
import "./styles.css";
import leftArrow from "../../assets/leftarrow.svg";
import rightArrow from "../../assets/rightarrow.svg";

const MAX_VISIBILITY = 3;

const Card = ({ src }) => (
  <div className="card">
    <img src={src} alt="" />
  </div>
);

export const Carousel = ({ contents }) => {
  const [active, setActive] = useState(contents.length / 2);
  const count = contents.length;

  return (
    <div className="carousel">
      {active > 0 && (
        <button
          className="nav left"
          onClick={() => setActive((i) => i - 1)}
          type="button"
        >
          <img
            src={leftArrow}
            style={{
              height: "90px",
            }}
          />
        </button>
      )}
      {contents.map((image, i) => (
        <div
          key={image}
          className="card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: i === active ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          <Card src={image} />
        </div>
      ))}
      {active < count - 1 && (
        <button
          className="nav right"
          onClick={() => setActive((i) => i + 1)}
          type="button"
        >
          <img
            src={rightArrow}
            style={{
              height: "90px",
            }}
          />
        </button>
      )}
    </div>
  );
};
