import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  icon: {
    fontSize: "50px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: "10px 10px",
    gridTemplateAreas: ". .",
    gridTemplateAreas: ". .",

    "& p": {
      fontSize: "15px",
    },
  },
});

export default useStyle;
