import React, { useState } from "react";
import { colors } from "../../constants";
import "./styles.css";

const MAX_VISIBILITY = 3;

const Card = ({ src }) => (
  <div className="card">
    <img src={src} alt="" />
  </div>
);

export const Carousel = ({ contents }) => {
  console.log(contents.length / 2);
  const [active, setActive] = useState(contents.length / 2);
  const count = contents.length;

  return (
    <div className="carousel">
      {active > 0 && (
        <button
          className="nav left"
          onClick={() => setActive((i) => i - 1)}
          type="button"
          style={{
            writingMode: "vertical-rl",
            color: colors.grey,
            transform: "rotate(180deg) translate(50%, 47%)",
            "&:hover": {
              color: colors.light,
            },
          }}
        >
          &#x27A4;
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
          style={{
            color: colors.grey,
          }}
        >
          &#x27A4;
        </button>
      )}
    </div>
  );
};
