import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import Grid from '@material-ui/core/Grid';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  AppBarContainer:{
    height:"100px"
  },
  menuButton: {
 

  },
  menuIcon:{
fontSize:"70px",
[theme.breakpoints.up("sm")]: {
    marginLeft:"5vh"
  }

  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  },
  icons:{
    position:"relative",
    '& p':{
        position:"absolute",
        fontSize:"10px",
        bottom:"-10px"
    }
  },
  iconContainer:{
      textAlign:"right"
  },
  menuContainer:{
  
  },
  sectionDesktop: {
    display: "flex",
    [theme.breakpoints.up("md")]: {

    }
  }
}));

export default function Appbar() {
  const classes = useStyles();



  return (
    <div className={classes.grow}>
      <AppBar position="static"  className={classes.AppBarContainer} >
      <Grid container spacing={3}>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}  className={classes.menuContainer}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon  className={classes.menuIcon} />
          </IconButton>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
              <div className={classes.search}>
              <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
              </Grid>
              <Grid item xs={4} sm={4} md={4}  lg={4} xl={4}     className={classes.iconContainer} >
              <IconButton aria-label="Accounts" className={classes.icons}  color="inherit">
              <Badge badgeContent={5} color="secondary">
                <MailIcon />
              </Badge>
              <p>Accoungggggggggggggggggggggggggggt</p>
            </IconButton>
              
            <IconButton aria-label="Accounts" className={classes.icons}  color="inherit">
              <Badge badgeContent={5} color="secondary">
                <MailIcon />
              </Badge>
              <p>Account</p>
            </IconButton>
            <IconButton aria-label="Accounts" className={classes.icons}  color="inherit">
              <Badge badgeContent={5} color="secondary">
                <MailIcon />
              </Badge>
              <p>Account</p>
            </IconButton>
              </Grid>
              </Grid>
       
      </AppBar>

    </div>
  );
}
