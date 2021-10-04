import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  work: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    fontSize: "20px",
    margin: "0 20px",
    "& p": {
      fontSize: "14px",
      marginBottom: "10px",
    },
  },
});

export default useStyle;
