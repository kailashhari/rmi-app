import React from "react";
import { styled } from "@mui/material";
import PropTypes from "prop-types";
import { colors } from "../../constants";

const footerData = [
  {
    columnTitle: "Home",
    columnItems: [
      { itemName: "About", itemLink: "/about" },
      { itemName: "Projects", itemLink: "/projects" },
      { itemName: "Accolades", itemLink: "/accolades" },
    ],
  },
  {
    columnTitle: "Events",
    columnItems: [
      { itemName: "Genesis", itemLink: "/about" },
      { itemName: "Following", itemLink: "/accolades" },
      { itemName: "Hackathon", itemLink: "/gallery" },
    ],
  },
  {
    columnTitle: "Our Team",
    columnItems: [
      { itemName: "Members", itemLink: "/about" },
      { itemName: "Alumni", itemLink: "/projects" },
      { itemName: "Faculty Advisor", itemLink: "/accolades" },
    ],
  },
];

const FooterRight = styled("div")({
  display: "flex",
  marginTop: "1rem",
});

const FooterColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
});

const FooterColumnTitle = styled("div")({
  color: colors.primary,
  fontSize: "1rem",
  fontFamily: "Gotham",
  fontWeight: "light",
});

const FooterColumnItem = styled("div")({
  color: "#fff",
  fontSize: "1rem",
  fontFamily: "Poppins",
});

const FooterColumnHolder = ({ columnTitle, columnItems }) => (
  <FooterColumn>
    <FooterColumnTitle>{columnTitle}</FooterColumnTitle>
    {columnItems.map((item) => (
      <FooterColumnItem key={item.itemName}>{item.itemName}</FooterColumnItem>
    ))}
  </FooterColumn>
);

FooterColumnHolder.propTypes = {
  columnTitle: PropTypes.string.isRequired,
  columnItems: PropTypes.arrayOf(
    PropTypes.shape({
      itemName: PropTypes.string.isRequired,
      itemLink: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const FooterRightHolder = () => (
  <FooterRight
    sx={{
      gap: {
        xs: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "3rem",
      },
    }}
  >
    {footerData.map((column) => (
      <FooterColumnHolder
        key={column.columnTitle}
        columnTitle={column.columnTitle}
        columnItems={column.columnItems}
      />
    ))}
  </FooterRight>
);

export default FooterRightHolder;
