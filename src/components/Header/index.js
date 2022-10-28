import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { styled, Zoom } from "@mui/material";
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

const Indicator = () => {
  return (
    <Zoom in={true}>
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
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
  // (location.state?.prevPath === '/' && location.pathname !== '/') ? 'zoomIn 0.4s forwards' : 'none';
  console.log(location.state?.prevPath, location.pathname);

  return (
    <AppBar
      position="fixed"
      sx={{
        background: `linear-gradient(0deg, ${colors.dark}00 0%, ${colors.dark}FF 30%)`,
        height: "6rem",
        zIndex: 1000,
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
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              display: "block",
              margin: location.pathname === "/" ? "0" : "1.8rem",
              padding: 0,
              width: location.pathname === "/" ? "0" : "56px",
              height: location.pathname === "/" ? "0" : "56px",
              animation: logoAnim,
            }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{
                      ...fontStyles.navlinks,
                    }}
                  >
                    {page.text}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              position: "relative",
              gap: "0.8rem",
            }}
          >
            {/* <NavItem
              key={'Home'}
              style={{
                ...fontStyles.navlinks,
                color: location.pathname === '/' ? colors.primary : colors.light,
              }}   
            >
              <Link to={`/`} state={{prevPath: location.pathname}} style={{
                color: 'inherit',
                textDecoration: 'none'
              }}>Home</Link>
              {location.pathname === '/' && <Indicator active={location.pathname === '/'}/>}
            </NavItem>          */}

            {pages.map((page) => (
              <NavItem
                key={page.text}
                style={{
                  ...fontStyles.navlinks,
                  color:
                    location.pathname === `/${page.route}`
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
                  }}
                >
                  {page.text}
                </Link>
                {location.pathname === `/${page.route}` && (
                  <Indicator active={location.pathname === `/${page.route}`} />
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
            >
              <YoutubeSvg
                style={{
                  height: "34px",
                }}
              />
            </a>
            <a
              href="https://www.youtube.com/c/RMIRoboticsandMachineIntelligenceNITT"
              style={{
                height: "36px",
                marginBlock: "auto",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
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
  );
}
export default ResponsiveAppBar;
