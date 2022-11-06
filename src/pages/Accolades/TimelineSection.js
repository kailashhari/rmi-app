import { listClasses, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";
import { colors } from "../../constants";

import "./styles.css";

const Line = styled("div")({
  height: "250px",
  width: "5px",
  backgroundColor: `${colors.primary}`,
});

const CircleWrapper = styled("div")({
  position: "relative",
});

const Circle = styled("div")({
  width: "30px",
  height: "30px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: `${colors.dark}`,
  borderRadius: "50%",
  backgroundColor: "#e5e5e5",
});

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "15rem",
});

const Message = styled("div")({
  position: "absolute",
  width: "fit-content",
  minWidth: "30vw",
  fontWeight: "bold",
  borderRadius: "0.8rem",
  boxShadow: `0 0 16px ${colors.primary}BB`,
  height: "fit-content",
  top: "-100%",
  display: "flex",
  flexDirection: "column",
  padding: "1rem 2rem",
});

const MessageTitle = styled("div")({
  fontSize: "1.2rem",
});
const MessageVenue = styled("div")({
  fontSize: "1rem",
});
const MessageProject = styled("div")({
  fontSize: "1.2rem",
});
const MessageHighlight = styled("span")({
  marginLeft: "0.8rem",
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
    };
  }
};

const Timeline = ({ setObserver }) => {
  const content = [
    {
      title1: "1st place in",
      title2: "Smart India Hackathon 2022",
      venue: "MHRD | August 2022",
      project: "Project ANVI",
    },
    {
      title1: "1st place in",
      title2: "Smart India Hackathon 2022",
      venue: "MHRD | August 2022",
      project: "Project ANVI",
    },
    {
      title1: "1st place in",
      title2: "Smart India Hackathon 2022",
      venue: "MHRD | August 2022",
      project: "Project ANVI",
    },
    {
      title1: "1st place in",
      title2: "Smart India Hackathon 2022",
      venue: "MHRD | August 2022",
      project: "Project ANVI",
    },
    {
      title1: "1st place in",
      title2: "Smart India Hackathon 2022",
      venue: "MHRD | August 2022",
      project: "Project ANVI",
    },
    {
      title1: "1st place in",
      title2: "Smart India Hackathon 2022",
      venue: "MHRD | August 2022",
      project: "Project ANVI",
    },
  ];
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
            >
              {i + 1}
            </Circle>
            {message !== "" && (
              <Message sx={oddOrEven(i)}>
                <MessageTitle>
                  {message.title1}
                  <MessageHighlight>{message.title2}</MessageHighlight>
                </MessageTitle>
                <MessageVenue>{message.venue}</MessageVenue>
                <MessageProject>{message.project}</MessageProject>
              </Message>
            )}
          </CircleWrapper>
        </>
      ))}
    </Wrapper>
  );
};

export default function App() {
  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <div className="App">
      <TimelineObserver
        initialColor={`${colors.primary}44`}
        fillColor={colors.primary}
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
    </div>
  );
}
