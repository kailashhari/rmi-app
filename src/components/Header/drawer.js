import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/Drawer";
import { Indicator, pages } from ".";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Divider, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { colors, fontStyles } from "../../constants";
import { Link } from "react-router-dom";

export default function TemporaryDrawer({ state, toggleDrawer, location }) {
  const list = () => (
    <Box
      sx={{
        height: "100%",
        background: "transparent",
      }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <Divider />
      <List
        sx={{
          background: `linear-gradient(0deg, ${colors.dark}00 0%, ${colors.dark}FF 0%)`,
        }}
      >
        {pages.map((page, index) => (
          <ListItem divider key={page.text}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
              }}
            >
              <ListItemText
                sx={{
                  ...fontStyles.content,
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
                    fontSize: "1.1rem",
                    textDecoration: "none",
                  }}
                >
                  {page.text}
                </Link>
              </ListItemText>
              <Indicator active={location.pathname === `/${page.route}`} />
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box
        sx={{
          display: state ? "inline" : "none",
          zIndex: 200,
          height: "100%",
          width: "100%",
          position: "fixed",
          top: "4rem",
          background: "transparent",
        }}
      >
        {list()}
      </Box>
    </div>
  );
}
