import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    marginBottom: "5%",
    background: "#000000",
  },
  principal: {
    background: "#000000",
    margin: "0 100px",
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
    },
    " & p ": {
      color: "white",
      fontSize: "20px",
      textAlign: "-webkit-center",
    },
  },
  imgen: {
    "@media screen and (max-width:720px)": {
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
