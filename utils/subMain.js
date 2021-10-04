import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  skill: {
    height: "250px",
    display: "flex",
    paddingLeft: "60px",
    paddingTop: "20px",
    fontSize: "20px",
    margin: "0 100px",
    "& h2": {
      color: "white",
    },
  },
  star: {
    display: "flex",
    flexDirection: "column",
    fontSize: "20px",
  },
  css: {
    fontSize: "18px",
    width: "9rem",
    height: "9rem",
    borderRadius: "50%",
    margin: "auto",
    background: "linear-gradient(0deg, #fff 50%, rgb(255 255 255 / 20% )50%)",
    position: "relative",
    transform: "rotate(125deg)",
    "&::before": {
      content: '"CSS"',
      textAlign: "center",
      width: "9rem",
      height: "9rem",
      position: "absolute",
      top: "0",
      left: "0",
      background: "#111 content-box",
      borderRadius: "50%",
      padding: ".7em",
      boxSizing: "border-box",
      color: "#fff",
      lineHeight: "6rem",
      transform: "rotate(-125deg)",
    },
    "&:after": {
      content: '"70%"',
      width: "9rem",
      height: "9rem",
      position: "absolute",
      top: "0",
      left: "0",
      borderRadius: "50%",
      background: "linear-gradient(transparent 50%, #111 50%)",
      transform: "scale(1.1) rotate(-125deg)",
      textAlign: "center",
      color: "#fff",
      lineHeight: "10.1rem",
    },
  },
  javascript: {
    fontSize: "18px",
    width: "9rem",
    height: "9rem",
    borderRadius: "50%",
    margin: "auto",
    background: "linear-gradient(0deg, #fff 50%, rgb(255 255 255 / 20% )50%)",
    position: "relative",
    transform: "rotate(140deg)",
    "&::before": {
      content: '"JavaScript"',
      textAlign: "center",
      width: "9rem",
      height: "9rem",
      position: "absolute",
      top: "0",
      left: "0",
      background: "#111 content-box",
      borderRadius: "50%",
      padding: ".7em",
      boxSizing: "border-box",
      color: "#fff",
      lineHeight: "6rem",
      transform: "rotate(-140deg)",
    },
    "&:after": {
      content: '"80%"',
      width: "9rem",
      height: "9rem",
      position: "absolute",
      top: "0",
      left: "0",
      borderRadius: "50%",
      background: "linear-gradient(transparent 50%, #111 50%)",
      transform: "scale(1.1) rotate(-140deg)",
      textAlign: "center",
      color: "#fff",
      lineHeight: "10.1rem",
    },
  },
  React: {
    fontSize: "18px",
    width: "9rem",
    height: "9rem",
    borderRadius: "50%",
    margin: "auto",
    background: "linear-gradient(0deg, #fff 50%, rgb(255 255 255 / 20% )50%)",
    position: "relative",
    transform: "rotate(155deg)",
    "&::before": {
      content: '"React"',
      textAlign: "center",
      width: "9rem",
      height: "9rem",
      position: "absolute",
      top: "0",
      left: "0",
      background: "#111 content-box",
      borderRadius: "50%",
      padding: ".7em",
      boxSizing: "border-box",
      color: "#fff",
      lineHeight: "6rem",
      transform: "rotate(-155deg)",
    },
    "&:after": {
      content: '"90%"',
      width: "9rem",
      height: "9rem",
      position: "absolute",
      top: "0",
      left: "0",
      borderRadius: "50%",
      background: "linear-gradient(transparent 50%, #111 50%)",
      transform: "scale(1.1) rotate(-155deg)",
      textAlign: "center",
      color: "#fff",
      lineHeight: "10.1rem",
    },
  },
  Redux: {
    fontSize: "18px",
    width: "9rem",
    height: "9rem",
    borderRadius: "50%",
    margin: "auto",
    background: "linear-gradient(0deg, #fff 50%, rgb(255 255 255 / 20% )50%)",
    position: "relative",
    transform: "rotate(90deg)",
    "&::before": {
      content: '"Redux"',
      textAlign: "center",
      width: "9rem",
      height: "9rem",
      position: "absolute",
      top: "0",
      left: "0",
      background: "#111 content-box",
      borderRadius: "50%",
      padding: ".7em",
      boxSizing: "border-box",
      color: "#fff",
      lineHeight: "6rem",
      transform: "rotate(-90deg)",
    },
    "&:after": {
      content: '"50%"',
      width: "9rem",
      height: "9rem",
      position: "absolute",
      top: "0",
      left: "0",
      borderRadius: "50%",
      background: "linear-gradient(transparent 50%, #111 50%)",
      transform: "scale(1.1) rotate(-90deg)",
      textAlign: "center",
      color: "#fff",
      lineHeight: "10.1rem",
    },
  },
});

export default useStyle;
