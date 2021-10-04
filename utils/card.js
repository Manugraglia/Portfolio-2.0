import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  conteiner: {
    fontFamily: "'Marcellus SC', serif",
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
    background: "#00000",
    height: "418px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "24px",
    padding: "20px",
    color: "white",

    width: "310px",
    background: "#272525",
    "& h3": {
      fontSize: "36px",
    },
  },
  line: {
    margin: "23px",
    background: "white",
    width: "80%",
    height: "4px",
  },
});

export default useStyle;
