import { Container, Grid, styled } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import PageWrapper from "../../components/PageWrapper";
import { colors, fontStyles } from "../../constants";
import Divider from "../../components/Divider";
import Card from "./Card";

const SectionTitle = styled("div")({
  ...fontStyles.heading,
  margin: "1rem",
});
const SectionSubtitle = styled("div")({
  ...fontStyles.content,
  textAlign: "center",
  fontSize: "1.6rem",
  color: colors.primary,
  margin: "0",
});

const Section = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  // border: "1px solid red",
  height: "fit-content",
  marginBlock: "8rem",
  gap: "2rem",
});

const Tabs = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "8rem",
  width: "fit-content",
  margin: "auto",
  position: "relative",
  cursor: "pointer",
});

const Tab = styled("div")({
  fontFamily: "Poppins",
  fontSize: "1.4rem",
  color: colors.light,
});

const Indicator = styled("div")({
  backgroundColor: colors.light,
  height: "0.2rem",
  position: "absolute",
  transition: "all 0.2s ease-in-out",
});

const Development = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});
const Webops = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const Selector = () => {
  const [tab, setTab] = useState(0);
  const developmentRef = useRef(null);
  const webopsRef = useRef(null);
  const tabsRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const tabsCoords = tabsRef.current.getBoundingClientRect();
    let coords;
    if (tab === 0) {
      coords = developmentRef.current.getBoundingClientRect();
    } else if (tab === 1) {
      coords = webopsRef.current.getBoundingClientRect();
    }
    console.log(coords);
    indicatorRef.current.style.width = `${coords.width * 0.7}px`;
    indicatorRef.current.style.left = `${
      coords.left - tabsCoords.left + coords.width * 0.15
    }px`;
    indicatorRef.current.style.top = `${
      coords.top - tabsCoords.top + coords.height
    }px`;
  }, [tab, indicatorRef, tabsRef, developmentRef, webopsRef]);

  return (
    <>
      <Tabs ref={tabsRef}>
        <Tab
          onClick={() => setTab(0)}
          ref={developmentRef}
          sx={{
            color: tab === 0 ? colors.light : colors.grey,
            opacity: tab === 0 ? 1 : 0.6,
          }}
        >
          Architects
        </Tab>
        <Tab
          onClick={() => setTab(1)}
          ref={webopsRef}
          sx={{
            color: tab === 0 ? colors.grey : colors.light,
            opacity: tab === 1 ? 1 : 0.6,
          }}
        >
          Web-ops
        </Tab>
        <Indicator ref={indicatorRef} />
      </Tabs>
      {tab === 0 && (
        <Development>
          <SectionSubtitle>Foundational design and development</SectionSubtitle>
          <Container maxWidth="md" sx={{ marginTop: "3rem" }}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              rowSpacing={8}
              width="fit-content"
              // sx={{
              //   gridTemplateColumns: {
              //     lg: "repeat(3, minmax(14rem, 1fr))",
              //     md: "repeat(2, minmax(14rem, 1fr))",
              //     sm: "repeat(1, minmax(14rem, 1fr))",
              //   },
              // }}
            >
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                align="center"
                width="fit-content"
              >
                <Card
                  member={{
                    name: "Hello World",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                align="center"
                width="fit-content"
              >
                <Card
                  member={{
                    name: "Hello World",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                align="center"
                width="fit-content"
              >
                <Card
                  member={{
                    name: "Hello World",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                align="center"
                width="fit-content"
              >
                <Card
                  member={{
                    name: "Hello World",
                  }}
                />
              </Grid>

              {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
            </Grid>
          </Container>
          <Divider
            sx={{
              width: "150%",
              margin: "20rem",
              paddingTop: "20rem",
              paddingBottom: "10rem",
            }}
          />
          <SectionSubtitle sx={{ marginTop: "2rem" }}>
            Data acquisition
          </SectionSubtitle>
          <Container maxWidth="md" sx={{ marginTop: "3rem" }}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              rowSpacing={8}
              width="fit-content"
              // sx={{
              //   gridTemplateColumns: {
              //     lg: "repeat(3, minmax(14rem, 1fr))",
              //     md: "repeat(2, minmax(14rem, 1fr))",
              //     sm: "repeat(1, minmax(14rem, 1fr))",
              //   },
              // }}
            >
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                align="center"
                width="fit-content"
              >
                <Card
                  member={{
                    name: "Hello World",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                align="center"
                width="fit-content"
              >
                <Card
                  member={{
                    name: "Hello World",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                align="center"
                width="fit-content"
              >
                <Card
                  member={{
                    name: "Hello World",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                align="center"
                width="fit-content"
              >
                <Card
                  member={{
                    name: "Hello World",
                  }}
                />
              </Grid>

              {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
            </Grid>
          </Container>
        </Development>
      )}
      {tab === 1 && (
        <Webops>
          <Container maxWidth="md" sx={{ marginTop: "5.4rem" }}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              rowSpacing={8}
              width="fit-content"
              // sx={{
              //   gridTemplateColumns: {
              //     lg: "repeat(3, minmax(14rem, 1fr))",
              //     md: "repeat(2, minmax(14rem, 1fr))",
              //     sm: "repeat(1, minmax(14rem, 1fr))",
              //   },
              // }}
            >
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                align="center"
                width="fit-content"
              >
                <Card
                  member={{
                    name: "Hello World",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                align="center"
                width="fit-content"
              >
                <Card
                  member={{
                    name: "Hello World",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                align="center"
                width="fit-content"
              >
                <Card
                  member={{
                    name: "Hello World",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                align="center"
                width="fit-content"
              >
                <Card
                  member={{
                    name: "Hello World",
                  }}
                />
              </Grid>

              {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
            </Grid>
          </Container>
        </Webops>
      )}
    </>
  );
};

const index = () => {
  return (
    <PageWrapper>
      <Section>
        <SectionTitle>RMI Web Team</SectionTitle>
        <Selector />
      </Section>
    </PageWrapper>
  );
};

export default index;