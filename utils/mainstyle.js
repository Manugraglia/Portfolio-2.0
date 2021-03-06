import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  content: {
    width: "100%",
    display: "flex",
    fontFamily: "Alfa Slab One",
    "@media screen and (max-width:960px)": {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
    "@media screen and (max-width:360px)": {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
    "@media screen and (max-width:325px)": {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
    "@media screen and (max-width:415px)": {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
  },
  h1: {
    fontFamily: "Alfa Slab One",
    fontSize: "50px",
  },
  titlecontent: {
    display: "flex",
    margin: "0 0 0 100px",
    flexDirection: "column",
    justifyContent: "center",
    width: "50%",
    fontSize: "30px",
    "@media screen and (max-width:960px)": {
      margin: "0",
      width: "100%",
    },
  },
  button: {
    textDecoration: "none",
    textAlign: "center",
    color: "black",
    alignSelf: "center",
    borderRadius: "20px",
    fontSize: "20px",
    marginTop: "20px",
    width: "170px",
    fontFamily: "Alfa Slab One",
    background: "linear-gradient(to right, #799F0C, #FFE000)",
  },
  title: {
    " & span": {
      alignSelf: "center",
      marginBottom: "4rem",
      fontSize: "50px",
      color: "#d8eb31",
    },
    color: "white",

    "& h1": {
      fontSize: "72px",
    },
    "& h2": {
      "@media screen and (max-width: 1024px)": {
        margin: "75px",
        marginTop: "-20px",
        fontSize: "72px",
      },
      "@media screen and (max-width:768px)": {
        margin: "70px",
        marginTop: "-10px",
        fontSize: "54px",
        display: "flex",
        justifyContent: "center",
      },
      display: "flex",
      justifyContent: "center",
      fontSize: "72px",
      fontHeight: "bold",
      textAlignLast: "end",
      marginTop: "-15px",
      width: "85%",
    },
  },
  logo: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    "@media screen and (max-width:960px)": {
      width: "50%",
      height: "100%",
      display: "none",
    },
    width: "50%",
    height: "100%",
  },
  img: {
    "@media screen and (max-width:960px)": {
      width: "90%",
      height: "90%",
    },

    width: "100%",
    height: "95%",
    fontSize: "355px",
    display: "flex",
    justifyContent: "center",
    color: "#d8eb31",
    fontFamily: "Alfa Slab One",
  },
});

export default useStyle;
