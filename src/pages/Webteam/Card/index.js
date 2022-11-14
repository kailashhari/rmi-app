import { styled } from "@mui/material";
import React from "react";
import { colors } from "../../../constants";
import { ReactComponent as GitSvg } from "../../../assets/memberCardSvgs/git.svg";
import { ReactComponent as InSvg } from "../../../assets/memberCardSvgs/in.svg";
import { ReactComponent as MailSvg } from "../../../assets/memberCardSvgs/mail.svg";
import { ReactComponent as WebSvg } from "../../../assets/memberCardSvgs/web.svg";
import { ReactComponent as FlipOne } from "../../../assets/memberCardSvgs/flipsvg1.svg";
import { ReactComponent as FlipTwo } from "../../../assets/memberCardSvgs/flipsvg2.svg";

const nameModder = (name) => {
  const totalLength = name.length;
  if (totalLength < 14) {
    return { fname: name, lname: "" };
  }
  const parts = name.split(" ");
  if (parts.length === 1) {
    return { fname: name, lname: "" };
  }
  let lLen = parts[0].length;
  let rLen = totalLength - lLen - 1;
  let stopAfter = 0;
  let min = Math.max(lLen, rLen);
  let i = 1;
  while (i < parts.length) {
    lLen += parts[i].length + 1;
    rLen -= parts[i].length + 1;
    if (min > Math.max(lLen, rLen)) {
      min = Math.max(lLen, rLen);
      stopAfter = i - 1;
    }
    i += 1;
  }
  let fName = parts[0],
    lName = parts[stopAfter + 1];
  i = 1;
  while (i <= stopAfter) {
    fName += " " + parts[i];
    i += 1;
  }
  i = stopAfter + 2;
  while (i < parts.length) {
    lName += " " + parts[i];
    i += 1;
  }
  return { fname: fName, lname: lName };
};

const CardLayout = styled("div")({
  backgroundColor: colors.dark,
  height: "17.6rem",
  width: "14rem",
  boxShadow: `0 0 16px ${colors.primary}BB`,
  borderRadius: "0.8rem",
  transformStyle: "preserve-3d",
  perspective: "1000px",
  cursor: "pointer",
});

const Front = styled("div")({
  height: "100%",
  width: "100%",
  overflow: "hidden",
  position: "relative",
  webkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  transformStyle: "preserve-3d",
});

const Back = styled("div")({
  backgroundColor: colors.primary,
  height: "100%",
  width: "100%",
  overflow: "hidden",
  position: "absolute",
  webkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  top: 0,
  transform: "rotateY(180deg)",
  borderRadius: "0.8rem",
  transformStyle: "preserve-3d",
  paddingTop: "1.2rem",
});

const ImgHolder = styled("div")({
  height: "13rem",
  width: "13rem",
  overflow: "hidden",
  marginInline: "auto",
  marginTop: "0.5rem",
  borderRadius: "0.6rem",
});
const Img = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

const Slide = styled("div")(({ hover }) => ({
  transition: "all 0.3s ease-in-out",
  width: "100%",
  height: hover ? "17.6rem" : "3rem",
  position: "absolute",
  backgroundColor: colors.dark,
  top: hover ? "0" : "13.6rem",
  zIndex: 2,
  borderRadius: hover ? "0.8rem" : "0",
}));

const Slider = styled("div")(({ hover }) => ({
  width: "100%",
  borderRadius: "0.6rem",
  height: "fit-content",
  zIndex: 3,
  position: "absolute",
  paddingTop: hover ? "1.2rem" : "0.6rem",
  top: hover ? "0" : "13.4rem",
  transition: "all 0.3s ease-in-out",
}));

const FirstName = styled("div")({
  marginBlock: "-0.2rem",
  fontFamily: "Poppins",
  fontSize: "1.2rem",
  zIndex: 3,
  fontWeight: 1000,
  width: "100%",
  textAlign: "center",
  height: "2rem",
});
const SingleName = styled("div")({
  marginBlock: "-0.2rem",
  fontFamily: "Poppins",
  fontSize: "1.2rem",
  zIndex: 3,
  fontWeight: 1000,
  width: "100%",
  textAlign: "center",
  height: "4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Subtitle = styled("div")({
  width: "100%",
  color: colors.primary,
  fontSize: "0.9rem",
  textAlign: "center",
  fontFamily: "Gotham",
  fontWeight: 500,
  margin: "1.2rem 0",
});

const SubtitleFlip = styled("div")({
  width: "100%",
  color: colors.light,
  backgroundColor: colors.primaryDark,
  paddingBlock: "0.4rem",
  fontSize: "0.9rem",
  textAlign: "center",
  fontFamily: "Gotham",
  fontWeight: 500,
  margin: "1.2rem 0",
});

const Domain = styled("div")({
  width: "100%",
  color: colors.light,
  fontSize: "0.9rem",
  fontFamily: "Gotham",
  fontWeight: 500,
  margin: "0.4rem 0",
  textAlign: "center",
});

const Project = styled("div")({
  width: "100%",
  color: colors.dark,
  fontSize: "0.9rem",
  fontFamily: "Gotham",
  fontWeight: 500,
  margin: "0.4rem 0",
  textAlign: "center",
});

const Icons = styled("div")({
  display: "flex",
  width: "fit-content",
  marginInline: "auto",
  gap: "0.8rem",
  marginTop: "1.6rem",
});

const Card = (props) => {
  const [flip, setFlip] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const domains = [
    "Embedded Systems",
    "Aerial Robotics",
    "Humanoid Robotic Systems",
    "Mobile Robotics",
  ];
  const namesplit = nameModder(props.member.name.toUpperCase());
  return (
    <CardLayout
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => {
        setFlip((flip) => !flip);
      }}
      sx={{
        transition: "transform 0.4s",
        transform: flip ? "rotateY(180deg)" : "rotateY(0)",
      }}
    >
      <Front>
        <ImgHolder>
          <Img src="https://picsum.photos/500" alt="profile" loading="lazy" />
        </ImgHolder>
        <Slide hover={hover} />
        <Slider hover={hover}>
          {namesplit.lname === "" ? (
            <SingleName>{namesplit.fname}</SingleName>
          ) : (
            <>
              <FirstName>{namesplit.fname}</FirstName>
              <FirstName>{namesplit.lname}</FirstName>
            </>
          )}
          <Subtitle>Head of Design and Publicity</Subtitle>
          {domains.map((domain) => (
            <Domain key={domain}>{domain}</Domain>
          ))}
          <Icons>
            <a href="https://github.com">
              <GitSvg />
            </a>
            <a href="https://github.com">
              <InSvg />
            </a>
            <a href="https://github.com">
              <MailSvg />
            </a>
            <a href="https://github.com">
              <WebSvg />
            </a>
          </Icons>
          <FlipOne
            style={{
              position: "absolute",
              bottom: "-1.8rem",
              right: 0,
              zIndex: 2,
            }}
          />
        </Slider>
      </Front>
      <Back>
        <FirstName
          sx={{
            color: colors.dark,
          }}
        >
          {props.member.name}
        </FirstName>
        <FirstName
          sx={{
            color: colors.dark,
          }}
        >
          {props.member.name}
        </FirstName>
        {/* <FirstName
          sx={{
            color: colors.dark,
          }}
        >
          SREEKUMAR
        </FirstName> */}
        <SubtitleFlip>Projects</SubtitleFlip>
        {domains.map((domain) => (
          <Project key={domain}>{domain}</Project>
        ))}
        <FlipTwo
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            zIndex: 2,
          }}
        />
      </Back>
    </CardLayout>
  );
};

export default Card;
