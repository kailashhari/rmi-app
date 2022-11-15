import { formControlUnstyledClasses } from "@mui/base";
import { Container, styled } from "@mui/material";
import React from "react";
import { fontStyles, colors } from "../../../constants";
import { ReactComponent as GitSvg } from "../../../assets/memberCardSvgs/git.svg";
import { ReactComponent as InSvg } from "../../../assets/memberCardSvgs/in.svg";
import { ReactComponent as MailSvg } from "../../../assets/memberCardSvgs/mail.svg";
import { ReactComponent as WebSvg } from "../../../assets/memberCardSvgs/web.svg";

const FacadLayout = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const Icons = styled("div")({
  position: "absolute",
  display: "flex",
  width: "fit-content",
  left: 0,
  right: 0,
  bottom: "1rem",
  marginInline: "auto",
  gap: "0.8rem",
  marginTop: "1.6rem",
});

const Main = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  marginBlock: "4rem",
  gap: "4rem",
});

const Img = styled("img")({
  width: "16rem",
  height: "16rem",
  borderRadius: "0.8rem",
  boxShadow: `0 0 16px ${colors.primary}BB`,
});

const ProfHeading = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const Name = styled("div")({
  ...fontStyles.heading,
  fontSize: "2.2rem",
});

const Position = styled("div")({
  ...fontStyles.content,
  color: colors.grey,
});

const Department = styled("div")({
  ...fontStyles.content,
});

const Contents = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

const contents = [
  {
    heading: "Qualification",
    type: "bullets",
    content: [
      {
        subHeading: "",
        data: [
          "BE Mechanical (CIT, Coimbatore)1989",
          "ME Manufacturing Technology (REC, Tiruchirappalli) 1992",
          "PhD Mechanical (NIT, Tiruchirappalli) 2009",
        ],
      },
      {
        subHeading: "Project",
        data: [
          "BE Mechanical (CIT, Coimbatore)1989",
          "ME Manufacturing Technology (REC, Tiruchirappalli) 1992",
          "PhD Mechanical (NIT, Tiruchirappalli) 2009",
        ],
      },
    ],
  },
  {
    heading: "Qualification",
    type: "para",
    content: [
      {
        subHeading: "Consultancy Project",
        data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        subHeading: "",
        data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      },
    ],
  },
];

const ContentLayout = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  gap: "0.6rem",
});
const ContentHeading = styled("div")({
  ...fontStyles.heading,
  fontSize: "1.6rem",
  marginLeft: "1.6rem",
  marginBottom: "0.6rem",
});

const ContentContent = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
});

const Paragraph = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
});
const ParagraphTitle = styled("div")({
  ...fontStyles.heading,
  fontSize: "1.4rem",
  color: colors.grey,
  fontWeight: 500,
  marginLeft: "1.6rem",
  fontStyle: "italic",
});
const ParagraphContent = styled("div")({
  ...fontStyles.content,
  marginLeft: "1.6rem",
});

const BulletsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
});

const Bullet = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",
});

const BulletPoint = styled("div")({
  width: "0.6rem",
  height: "0.6rem",
  backgroundColor: colors.primary,
  borderRadius: "100%",
});
const BulletContent = styled("div")({
  ...fontStyles.content,
});

const Content = ({ data }) => {
  return (
    <ContentLayout>
      <Container maxWidth="lg">
        <ContentHeading>{data.heading}</ContentHeading>
        <ContentContent>
          {data.type === "para"
            ? data.content.map((para) => (
                <Paragraph key={para.data}>
                  {para.subHeading !== "" && (
                    <ParagraphTitle>{para.subHeading}</ParagraphTitle>
                  )}
                  <ParagraphContent>{para.data}</ParagraphContent>
                </Paragraph>
              ))
            : data.content.map((bull) => (
                <Paragraph key={bull.data}>
                  {bull.subHeading !== "" && (
                    <ParagraphTitle>{bull.subHeading}</ParagraphTitle>
                  )}
                  <BulletsContainer>
                    {bull.data.map((bulletPoint, idx) => (
                      <Bullet key={idx}>
                        <BulletPoint />
                        <BulletContent>{bulletPoint}</BulletContent>
                      </Bullet>
                    ))}
                  </BulletsContainer>
                </Paragraph>
              ))}
        </ContentContent>
      </Container>
    </ContentLayout>
  );
};

const index = () => {
  return (
    <FacadLayout>
      <Main>
        <Img src="https://picsum.photos/200" />
        <ProfHeading>
          <Name>Dr. K. Paneerselvam</Name>
          <Position>Associate Professor</Position>
          <Department>Department of Mechanical Engineering</Department>
          <Icons>
            <a href="https://github.com">
              <GitSvg style={{ width: "1.6rem" }} />
            </a>
            <a href="https://github.com">
              <InSvg style={{ width: "1.6rem" }} />
            </a>
            <a href="https://github.com">
              <MailSvg style={{ width: "1.6rem" }} />
            </a>
            <a href="https://github.com">
              <WebSvg style={{ width: "1.6rem" }} />
            </a>
          </Icons>
        </ProfHeading>
      </Main>
      <Contents>
        {contents.map((content) => (
          <Content data={content} key={content.heading} />
        ))}
      </Contents>
    </FacadLayout>
  );
};

export default index;
