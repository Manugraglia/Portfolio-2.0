import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    fontFamily: "'Marcellus SC', serif",
    position: "sticky",
    top: "0",
    zIndex: "500000",
    height: "70px",
    background: "#2d2b2b94",
  },
  imgnav: {
    "@media screen and (max-width:710px)": {
      width: "40px",
      height: "40px",
      margin: "25px",
      display: "flow",
    },
    width: "0px",
    height: "0px",
  },

  navbarcontent: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    "@media screen and (max-width:768px)": {
      margin: "0 0 0 20px",
    },
  },
  navlinks: {
    fontfamily: "Red Hat Text",
    textDecoration: "none",
    position: "relative",
    fontSize: "18px",
    color: "#ffff",
    margin: "0 20px",
    fontweight: "400",

    "&:hover": {
      fontWeight: "600",
      width: "100%",
      color: "#fff",
    },
    "&::after": {
      content: '""',
      backgroundColor: "#ff8000",
      height: "3px",
      width: "0",
      display: "block",
      left: "0",
      bottom: "-10px",
      transition: ".3s",
    },
    "&:hover::after": {
      width: "100%",
    },
    "@media screen and (max-width: 960px)": {
      textAlign: "center",
      padding: "2rem",
      width: "100%",
      display: "table",
    },
    "@media screen and (max-width: 960px)": {
      "&:hover::after": {
        width: "0",
      },
    },
  },

  logo: {
    fontSize: "36px",
    textDecoration: "none",
    fontFamily: "Roboto Slab",
    color: "#ffff",
    paddingLeft: "100px",
    "@media screen and (max-width:1024px)": {
      paddingLeft: "100px",
    },
    "@media screen and (max-width:768px)": {
      padding: 0,
    },
    "@media screen and (max-width:380px)": {
      fontSize: "24px",
    },
  },

  logocontent: {
    display: "flex",
    flexDirection: "column",
  },

  sublogo: {
    textDecoration: "none",
    fontSize: "14px",
    margin: "auto",
    fontFamily: "Red Hat Text",
    color: "#ffff",
    fontWeight: "500",
  },
  navmenu: {
    display: "grid",
    gridTemplateColumns: "repeat(5, auto)",
    gridGap: "10px",
    listStyle: "none",
    textAlign: "center",
    width: "100%",
    justifyContent: "end",
    marginRight: "2rem",

    "@media screen and (max-width: 960px)": {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "70vh",
      position: "absolute",
      top: "100px",
      left: "-100%",
      opacity: "1",
      transition: "all 0.5s ease",
    },
  },
  navmenuactive: {
    "@media screen and (max-width: 960px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      height: "70vh",
      position: "absolute",
      top: "70px",
      left: "-100%",
      opacity: "1",
      transition: "all 0.5s ease",
      background: "#242222",
      left: "0",
      opacity: "1",
      transition: "all 0.5s ease",
      zIndex: "1",
    },
  },

  navitem: {
    display: "flex",
    alignItems: "center",
    height: "80px",
  },

  navlinksmobile: {
    display: "none",
  },

  menuicon: {
    display: "none",
    "@media screen and (max-width: 960px)": {
      marginTop: "10px",
      display: "block",
      position: "absolute",
      top: "0",
      right: "0",
      transform: "translate(-100%, 60%)",
      fontSize: "1.8rem",
      cursor: "pointer",
      color: "white",
    },
  },
  navlinksmobile: {
    "@media screen and (max-width: 960px)": {
      display: "block",
      textAlign: "center",
      padding: "1.5rem",
      margin: "2rem auto",
      borderRadius: "4px",
      width: "80%",
      background: "#1888ff",
      textDecoration: "none",
      color: "#fff",
      fontSize: "1.5rem",
    },
  },
});

export default useStyles;
