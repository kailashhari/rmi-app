export const colors = {
  dark: "#001011",
  primary: "#57E2E5",
  light: "#FFFCF9",
  grey: "#C5C5C5",
  primaryDark: "#006992",
  purple: "#182026",
};

export const fontStyles = {
  heading: {
    fontFamily: "Raleway, sans-serif",
    fontWeight: 800,
    fontSize: "2.4rem",
    color: colors.primary,
  },
  content: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    fontSize: "1.3rem",
    color: colors.light,
  },
  navlinks: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    fontSize: "0.9rem",
    color: colors.light,
  },
};

export const defaultStyles = {
  color: colors.dark,
  ...fontStyles.content,
};
