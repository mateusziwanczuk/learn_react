import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./components/styles.css";
import * as serviceWorker from "./serviceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";

const theme = createMuiTheme({
	palette: {
		primary: { main: "#66c7c7" },
		secondary: { main: "#086464" }
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