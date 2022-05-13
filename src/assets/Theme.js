import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const Theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: ["Montserrat"].join(","),
      H1: {
        fontSize: "48.83px",
        fontFamily: "Montserrat",
      },
      H2: {
        fontSize: "39.06px",
        fontFamily: "Montserrat",
      },
      H3: {
        fontSize: "31.25px",
        fontFamily: "Montserrat",
      },
      H4: {
        fontSize: "25.00px",
        fontFamily: "Montserrat",
      },
      H5: {
        fontSize: "20.00px",
        fontFamily: "Montserrat",
      },
      Body: {
        fontSize: "16.00px",
        fontFamily: "Montserrat",
      },
      Body2: {
        fontSize: "12.80px",
        fontFamily: "Montserrat",
      },
      Caption: {
        fontSize: "10.24px",
        fontFamily: "Montserrat",
      },
      Caption2: {
        fontSize: "8.19px",
        fontFamily: "Montserrat",
      },
    },
  })
);

export default Theme;
