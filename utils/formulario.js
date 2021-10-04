import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  contact: {
    display: "flex",
    alignItems: "center",
    color: "red",
    fontSize: "30px",
  },
  cardcontact: {
    background: "#272525",
    padding: "30px",
    borderRadius: "15px",
    color: "white",
  },
  icon: {
    display: "flex",
    color: "#b3a7a7",
    padding: "10px",
    flexDirection: "column",
    fontSize: "25px",
    "& a": {
      textDecoration: "none",
      color: "#b3a7a7",
      padding: "10px",
    },
    "& i": {
      margin: "10px 0",
    },
  },
  principal: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    padding: "30px",
  },
  register: {
    background: "#272525",
    padding: "30px",
    width: "70%",
    borderRadius: "70px",
    color: "white",
  },
  boton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  control: {
    width: "100%",
    background: "#272525",
    padding: "10px",
    borderRadius: "20px",
    marginBottom: "16px",
    border: "1px solid #a569bd",
    fontSize: "18px",
  },
  button: {
    width: "50%",
    borderRadius: "50px",
    background: "#1f53c5",
    border: "none",
    padding: "12px",
    color: "#fff",
    margin: "16px 0",
    fontSize: "16px",
  },
  mensaje: {
    borderRadius: "15px",
    width: "100%",
    height: "100px",
    fontSize: "18px",
    background: "#272525",
    border: "1px solid #a569bd",
    resize: "none",
  },
  error: {
    fontSize: "20px",
    background: "#c98b8b",
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    padding: "10px",
    color: "red",
  },
});

export default useStyle;
