import { styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";
import { colors } from "../../constants";
import { AppContext } from "../../store/context";

import "./styles.css";

const Line = styled("div")({
  height: "200px",
  width: "5px",
  backgroundColor: `${colors.primary}`,
});

const CircleWrapper = styled("div")({
  position: "relative",
});

const Circle = styled("div")({
  width: "20px",
  height: "20px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: `${colors.dark}`,
  borderRadius: "50%",
  backgroundColor: "#e5e5e5",
  ["@media (max-width:780px)"]: {
    marginLeft: "-0.8rem",
  },
});

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "15rem",
  ["@media (max-width:780px)"]: {
    alignItems: "flex-start",
    marginLeft: "3rem",
  },
});

const Message = styled("div")({
  position: "absolute",
  width: "100%",
  minWidth: "30vw",
  fontWeight: "bold",
  borderRadius: "0.8rem",
  boxShadow: `0 0 16px ${colors.primary}BB`,
  height: "fit-content",
  top: "-100%",
  display: "flex",
  flexDirection: "column",
  padding: "1rem 2rem",
  ["@media (max-width:780px)"]: {
    alignItems: "flex-start",
    minWidth: "60vw",
    marginLeft: "1.5rem",
  },
});

const MessageVenue = styled("div")({
  color: colors.grey,
  fontSize: "0.8rem",
});
const MessageProject = styled("div")({
  fontSize: "1rem",
});
const MessageHighlight = styled("span")({
  fontSize: "1.2rem",
  color: colors.primary,
});

const oddOrEven = (n) => {
  if (n % 2 == 0) {
    return {
      left: "150%",
      animation: "slideInFromRight 0.4s forwards",
      alignItems: "flex-start",
    };
  } else {
    return {
      right: "150%",
      animation: "slideInFromLeft 0.4s forwards",
      alignItems: "flex-end",
      ["@media (max-width:780px)"]: {
        left: "150%",
        right: "0%",
        animation: "slideInFromLeft 0.4s forwards",
        alignItems: "flex-end",
      },
    };
  }
};

const Timeline = ({ setObserver }) => {
  const { accolades: content } = React.useContext(AppContext).accolades;
  const emptyList = [];
  content.forEach(() => {
    emptyList.push("");
  });
  const [messages, setMessages] = useState(emptyList);
  const timelineRefs = useRef([]);
  const circleRefs = useRef([]);

  useEffect(() => {
    timelineRefs.current.forEach((timeline) => {
      setObserver(timeline);
    });
    circleRefs.current.forEach((circle, i) => {
      setObserver(circle, () => {
        setMessages((prev) => {
          const newr = [...prev];
          newr[i] = content[i];
          return newr;
        });
      });
    });
  }, []);

  return (
    <Wrapper>
      {messages.map((message, i) => (
        <>
          <Line
            id={`timeline${i + 1}`}
            ref={(el) => {
              timelineRefs.current[i] = el;
            }}
            key={i * 2}
          />
          <CircleWrapper key={i * 2 + 1}>
            <Circle
              id={`circle${i + 1}`}
              ref={(el) => {
                circleRefs.current[i] = el;
              }}
            />
            {message !== "" && (
              <Message sx={oddOrEven(i)}>
                <MessageHighlight
                  sx={{
                    textAlign: i % 2 === 0 ? "left" : "right",
                  }}
                >
                  {message.title}
                </MessageHighlight>
                <MessageVenue
                  sx={{
                    textAlign: i % 2 === 0 ? "left" : "right",
                  }}
                >
                  {message.subtitle}
                </MessageVenue>
                <MessageProject
                  sx={{
                    textAlign: i % 2 === 0 ? "left" : "right",
                  }}
                >
                  {message.project}
                </MessageProject>
              </Message>
            )}
          </CircleWrapper>
        </>
      ))}
    </Wrapper>
  );
};

export default function App() {
  return (
    <div className="App">
      <TimelineObserver
        initialColor={`${colors.primary}44`}
        fillColor={colors.primary}
        handleObserve={(setObserver) => (
          <Timeline
            callback={() => {}}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
    </div>
  );
}
