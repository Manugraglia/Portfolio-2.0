import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    display: "flex",
    marginBottom: "5%",
    background: "#000000",
  },
  principal: {
    background: "#000000",
    margin: "0 100px",
    "@media screen and (max-width:960px)": {
      display: "flex",
      flexDirection: "column",
      margin: "0",
    },
    " & h2 ": {
      textDecoration: "underline",
      display: "flex",
      justifyContent: "space-evenly",
      color: "#b3a7a7",
      fontSize: "45px",
    },
    " & h3 ": {
      color: "white",
      fontSize: "35px",
      margin: "20px",
      display: "flex",
      justifyContent: "center",
      "@media screen and (max-width:960px)": {
        display: "flex",
        textAlign: "center",
      },
    },
    " & p ": {
      color: "white",
      fontSize: "20px",
      textAlign: "-webkit-center",
    },
  },
  submain: {
    "@media screen and (max-width:960px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  imgen: {
    "@media screen and (max-width:960px)": {
      display: "flex",
      flexDirection: "column",
    },
    " & img ": {
      width: "250px",
    },
    fontFamily: "'Marcellus SC', serif",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
  },
});

export default useStyle;
