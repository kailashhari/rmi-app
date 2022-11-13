import { styled } from "@mui/material";
import React from "react";
import { colors } from "../../../../constants";
import { ReactComponent as GitSvg } from "../../../../assets/memberCardSvgs/git.svg";
import { ReactComponent as InSvg } from "../../../../assets/memberCardSvgs/in.svg";
import { ReactComponent as MailSvg } from "../../../../assets/memberCardSvgs/mail.svg";
import { ReactComponent as WebSvg } from "../../../../assets/memberCardSvgs/web.svg";
import { ReactComponent as FlipOne } from "../../../../assets/memberCardSvgs/flipsvg1.svg";
import { ReactComponent as FlipTwo } from "../../../../assets/memberCardSvgs/flipsvg2.svg";
import noprofile from "../../../../assets/noprofile.png";

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
  paddingTop: "1.2rem",
  transform: "rotateY(180deg)",
  borderRadius: "0.8rem",
  transformStyle: "preserve-3d",
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
  paddingTop: hover ? "1.2rem" : "0.4rem",
  top: hover ? "0" : "13.4rem",
  transition: "all 0.3s ease-in-out",
}));

const SingleName = styled("div")({
  lineHeight: "1.2rem",
  marginBlock: "-0.2rem",
  fontFamily: "Poppins",
  fontSize: "0.98rem",
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
  margin: "0.6rem 0",
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
  marginTop: "2.0rem",
});

const Card = (props) => {
  const [flip, setFlip] = React.useState(false);
  const [hover, setHover] = React.useState(false);
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
          {props.member.imageLink ? (
            <Img src={props.member.imageLink} loading="lazy" />
          ) : (
            <Img src={noprofile} loading="lazy" />
          )}
        </ImgHolder>
        <Slide hover={hover} />
        <Slider hover={hover}>
          <SingleName>{props.member.name.toUpperCase()}</SingleName>
          <div
            style={{
              height: "6rem",
            }}
          >
            {props.member.position ? (
              <Subtitle>{props.member.position}</Subtitle>
            ) : null}
            {props.member.domains &&
              props.member.domains.map((domain, index) => (
                <Domain key={index}>{domain}</Domain>
              ))}
          </div>
          <Icons>
            {props.member.github ? (
              <a href={props.member.github} target="_blank" rel="noreferrer">
                <GitSvg />
              </a>
            ) : null}
            {props.member.linkedin ? (
              <a href={props.member.linkedin} target="_blank" rel="noreferrer">
                <InSvg />
              </a>
            ) : null}
            {props.member.email ? (
              <a
                href={`mailto:${props.member.email}`}
                target="_blank"
                rel="noreferrer"
              >
                <MailSvg />
              </a>
            ) : null}
            {props.member.personalPage ? (
              <a
                href={props.member.personalPage}
                target="_blank"
                rel="noreferrer"
              >
                <WebSvg />
              </a>
            ) : null}
          </Icons>
          <FlipOne
            style={{
              position: "absolute",
              bottom: "-1.2rem",
              right: 0,
              zIndex: 2,
            }}
          />
        </Slider>
      </Front>
      <Back>
        <SingleName>{props.member.name.toUpperCase()}</SingleName>
        <SubtitleFlip>Projects</SubtitleFlip>
        {props.member.projects &&
          props.member.projects.map((project) => (
            <Project key={project.pid}>{project.pname}</Project>
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
