import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  Zoom,
} from "@mui/material";
import { colors, fontStyles } from "../../constants";
import logo from "../../assets/logoCompressed.png";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as YoutubeSvg } from "../../assets/youtubeHeader.svg";
import { ReactComponent as GithubSvg } from "../../assets/githubHeader.svg";

// const pages = [
//   'Home', 'Our Team', 'Projects', 'Events', 'Accolades', 'Reach Us'];
const pages = [
  {
    text: "Home",
    route: "",
  },
  {
    text: "Our Team",
    route: "team",
  },
  {
    text: "Projects",
    route: "projects",
  },
  {
    text: "Events",
    route: "events",
  },
  {
    text: "Accolades",
    route: "accolades",
  },
];

const NavItem = styled("div")({
  margin: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Indicator = ({ active }) => {
  return (
    <Zoom in={active}>
      <div
        style={{
          width: "20px",
          height: "2px",
          backgroundColor: colors.primary,
        }}
      />
    </Zoom>
  );
};

function ResponsiveAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const location = useLocation();
  let logoAnim;
  if (
    location.state === null ||
    (location.state.prevPath !== "/" && location.pathname !== "/")
  ) {
    logoAnim = "none";
  } else if (location.state.prevPath === "/" && location.pathname !== "/") {
    logoAnim = "zoomIn 0.4s forwards";
  } else if (location.state.prevPath !== "/" && location.pathname === "/") {
    logoAnim = "zoomIn 0.4s reverse";
  }
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        zIndex: 100,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "row",
          marginLeft: "-5rem",
          marginTop: "1.2rem",
          marginBottom: "1.2rem",
        }}
      >
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            style={{
              display: "block",
              margin: location.pathname === "/" ? "0" : "3rem",
              padding: 0,
              width: location.pathname === "/" ? "0" : "56px",
              height: location.pathname === "/" ? "0" : "56px",
              animation: logoAnim,
            }}
          />
        </Link>
        <Typography
          sx={{
            ...fontStyles.title,
            display: { md: "none" },
            marginTop: "auto",
            marginLeft: "-2.5rem",
          }}
        >
          RMI
        </Typography>
      </Box>
      <Divider />
      <List>
        {pages.map((item) => (
          <Link
            key={item.text}
            to={`/${item.route}`}
            state={{ prevPath: location.pathname }}
            style={{
              color: "inherit",
              textDecoration: "none",
              fontSize: "1.1rem",
            }}
          >
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  textAlign: "center",
                  flexDirection: "column",
                  ...fontStyles.navlinks,
                  color:
                    location.pathname === `/${item.route}` ||
                    (item.route === "projects" &&
                      location.pathname.length > 8 &&
                      location.pathname.slice(0, 8) === "/project")
                      ? colors.primary
                      : colors.light,
                }}
              >
                <ListItemText primary={item.text} />
                <Indicator active={location.pathname === `/${item.route}`} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  // location.state?.prevPath === "/" && location.pathname !== "/"
  //   ? "zoomIn 0.4s forwards"
  //   : "none";
  console.log(location.state?.prevPath, location.pathname);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: `linear-gradient(0deg, ${colors.dark}00 0%, ${colors.dark}FF 20%)`,
          height: "6rem",
          zIndex: 200,
          boxShadow: "none",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Toolbar
            sx={{
              height: "fit-content",
              width: { xs: "100%", sm: "100%", md: "fit-content" },
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Link to={"/"}>
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    display: "block",
                    margin: location.pathname === "/" ? "0" : "1rem",
                    padding: 0,
                    width: location.pathname === "/" ? "0" : "56px",
                    height: location.pathname === "/" ? "0" : "56px",
                  }}
                />
              </Link>
              <Typography
                sx={{
                  ...fontStyles.title,
                  display: {
                    xs: location.pathname === "/" ? "none" : "block",
                    md: "none",
                  },
                  margin: "auto",
                  marginLeft: "-0.5rem",
                }}
              >
                RMI
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: "0.1rem", display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                position: "relative",
                gap: "1rem",
              }}
            >
              {pages.map((page) => (
                <NavItem
                  key={page.text}
                  style={{
                    ...fontStyles.navlinks,
                    color:
                      location.pathname === `/${page.route}` ||
                      (page.route === "projects" &&
                        location.pathname.length > 8 &&
                        location.pathname.slice(0, 8) === "/project")
                        ? colors.primary
                        : colors.light,
                  }}
                >
                  <Link
                    to={`/${page.route}`}
                    state={{ prevPath: location.pathname }}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      fontSize: "1.1rem",
                    }}
                  >
                    {page.text}
                  </Link>
                  {(location.pathname === `/${page.route}` ||
                    (page.route === "projects" &&
                      location.pathname.length > 8 &&
                      location.pathname.slice(0, 8) === "/project")) && (
                    <Indicator
                      active={location.pathname === `/${page.route}`}
                    />
                  )}
                </NavItem>
              ))}

              <a
                href="https://www.youtube.com/c/RMIRoboticsandMachineIntelligenceNITT"
                style={{
                  height: "36px",
                  marginBlock: "auto",
                  cursor: "pointer",
                }}
                target="_blank"
                rel="noreferrer"
              >
                <YoutubeSvg
                  style={{
                    height: "34px",
                  }}
                />
              </a>
              <a
                href="https://github.com/RMI-NITT"
                style={{
                  height: "36px",
                  marginBlock: "auto",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                target="_blank"
                rel="noreferrer"
              >
                <GithubSvg
                  style={{
                    height: "28px",
                    width: "36px",
                  }}
                />
              </a>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="persistent"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": {
            background: colors.dark,
            boxSizing: "border-box",
            width: 250,
          },
          display: { sm: "block", md: "none" },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
export default ResponsiveAppBar;
