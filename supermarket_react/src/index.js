import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import "./components/styles.css";

const theme = createMuiTheme({
	palette: {
		primary: { main: "#66c7c7" },
		secondary: { main: "#086464" }
	},
	typography: {
		useNextVariants: true,
	}
});

ReactDOM.render(
	<Router>
		<MuiThemeProvider theme={theme}>
			<App />
		</MuiThemeProvider>
	</Router>,
	document.getElementById("root")
);