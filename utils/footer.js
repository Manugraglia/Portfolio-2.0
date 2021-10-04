import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  foter: {
    "@media screen and (max-width:460px)": {
      fontSize: "12px",
      margin: "0 0 0 0",
    },
    background: "linear-gradient(to right, #799F0C, #FFE000)",
    display: "flex",
    justifyContent: "space-evenly",
    fontSize: "18px",
    margin: "0 0 0 0",
  },
  cont: {
    "@media screen and (max-width:620px)": {
      fontSize: "20px",
    },
    fontSize: "20px",
    display: "flex",
  },
  icon: {
    "@media screen and (max-width:720px)": {
      margin: "0 0 0 0",
      display: "flex",
      flexDirection: "column",
    },
    display: "flex",
    margin: "10px 20px",
    alignItems: "center",
  },
  svg: {
    margin: "10px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& li": {
      listStyle: "none",
      margin: "10px",
    },
    "& a": {
      fontSize: "20px",
      color: "black",
      fontWeight: "bold",
      textDecoration: "none",
    },
  },
});

export default useStyle;
