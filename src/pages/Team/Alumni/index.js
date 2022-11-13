import React, { useContext } from "react";
import Selector from "../../../components/Selector";
import Card from "./Card";
import { styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { AppContext } from "../../../store/context";

const CardGrid = styled("div")({
  width: "fit-content",
  marginInline: "auto",
  display: "grid",
  gridGap: "2.8rem",
  marginTop: "3.2rem",
});

const Index = () => {
  const alumniMembers = useContext(AppContext).ourTeam.alumni;
  const options = [
    "All",
    ...new Set(alumniMembers.map((member) => member.batchTag)),
  ];
  const [year, setYear] = React.useState("All");
  const filteredMembers = (i) => {
    let toBeReturned;
    if (i === "All") {
      toBeReturned = alumniMembers;
    } else {
      toBeReturned = alumniMembers.filter((member) => {
        return member.batchTag === i;
      });
    }
    return toBeReturned;
  };
  return (
    <>
      <Selector title={"Batch"} options={options} val={year} setVal={setYear} />
      <Container maxWidth="md" sx={{ marginTop: "3rem" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          rowSpacing={8}
          width="fit-content"
        >
          {filteredMembers(year).map((member, index) => (
            <Grid
              item
              key={member.id}
              xs={12}
              sm={6}
              md={4}
              lg={4}
              align="center"
              width="fit-content"
            >
              <Card member={member} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Index;
