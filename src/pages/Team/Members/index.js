import { styled } from "@mui/material";
import React, { useContext } from "react";
import YearSelector from "../YearSelector";
import Card from "./Card";
import { AppContext } from "../../../store/context";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";

const Index = () => {
  const currentMembers = useContext(AppContext).ourTeam.currentMembers;
  const uniqueYears = [
    ...new Set(currentMembers.map((member) => member.batchTag)),
  ];
  const uniqueYearStrings = uniqueYears.map(
    (uniqueYear) => `Batch of ${uniqueYear}`
  );
  const [year, setYear] = React.useState(1);
  const options = ["All", ...uniqueYearStrings];
  const filteredMembers = (i) => {
    let toBeReturned = [];
    if (i === 0) {
      toBeReturned = currentMembers;
    } else {
      toBeReturned = currentMembers.filter((member) => {
        return member.batchTag === uniqueYears[i - 1];
      });
    }
    return toBeReturned;
  };
  return (
    <>
      <YearSelector options={options} year={year} setYear={setYear} />
      <Container maxWidth="md" sx={{ marginTop: "3rem" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          rowSpacing={8}
          width="fit-content"
        >
          {filteredMembers(year).map((member) => (
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
