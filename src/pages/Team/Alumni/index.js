import React from "react";
import Selector from "../../../components/Selector";
import Card from "./Card";
import { styled } from "@mui/material";

const CardGrid = styled("div")({
  width: "fit-content",
  marginInline: "auto",
  display: "grid",
  gridGap: "2.8rem",
  marginTop: "3.2rem",
});

const Index = () => {
  const [val, setVal] = React.useState("All");
  const options = ["All", "2022", "2021", "2020"];
  return (
    <>
      <Selector title={"Batch"} options={options} val={val} setVal={setVal} />
      {/* {val} */}
      <CardGrid
        sx={{
          gridTemplateColumns: {
            lg: "repeat(3, minmax(14rem, 1fr))",
            md: "repeat(2, minmax(14rem, 1fr))",
            sm: "repeat(1, minmax(14rem, 1fr))",
          },
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardGrid>
    </>
  );
};

export default Index;
