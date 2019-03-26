import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import MainNav from "./components/Navigation/MainNav";
import MainContent from "./components/Navigation/MainContent";

const AppContainer = styled.div`
	display: flex;
	height: 100vh;
	width: 100%;
`;

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<AppContainer>
					<MainNav />
					<MainContent />
				</AppContainer>
			</BrowserRouter>
		);
	}
}

export default App;
