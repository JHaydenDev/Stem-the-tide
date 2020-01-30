import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HomeIcon from "@material-ui/icons/Home";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import HelpIcon from "@material-ui/icons/Help";
import LineWeightIcon from "@material-ui/icons/LineWeight";

import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkBox = styled.div`
  display: flex;
  width:20%;
  justify-content: space-around;
  @media (max-width: 900px) {
    flex-direction: column;
    width:100%;
  }
}
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const TopBarLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const TopBarBox = styled.div`
  display: flex;
  width: 100%;
  > h2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 900px) {
      flex-direction: column;
    }
  }
`;

const DrawerBox = styled.div`
@media (max-width: 900px) {
  padding-top: 67px;
}
`;

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <TopBarBox>
            <h2>
              Stem The Tide
              <LinkBox>
                <TopBarLink to="/register">Register</TopBarLink>
                <TopBarLink to="/login">Log in</TopBarLink>
              </LinkBox>
            </h2>
          </TopBarBox>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <DrawerBox>
          <List>
            <StyledLink to="/">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItem>
            </StyledLink>

            <StyledLink to="/rules">
              <ListItem button>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText>Rules</ListItemText>
              </ListItem>
            </StyledLink>

            <StyledLink to="/banned">
              <ListItem button>
                <ListItemIcon>
                  <NotInterestedIcon />
                </ListItemIcon>
                <ListItemText>Banned</ListItemText>
              </ListItem>
            </StyledLink>

            <StyledLink to="/restricted">
              <ListItem button>
                <ListItemIcon>
                  <ErrorOutlineIcon />
                </ListItemIcon>
                <ListItemText>Restricted</ListItemText>
              </ListItem>
            </StyledLink>

            <StyledLink to="/cardimg">
              <ListItem button>
                <ListItemIcon>
                  <LineWeightIcon />
                </ListItemIcon>
                <ListItemText>Card Search</ListItemText>
              </ListItem>
            </StyledLink>
          </List>
        </DrawerBox>
      </Drawer>
    </div>
  );
}
