import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import MainNav from "./components/Navigation/MainNav";
import MainContent from "./components/Navigation/MainContent";
import firebase from 'firebase'

const AppContainer = styled.div`
	display: flex;
	height: 100vh;
	width: 100%;
`;

var config = {
    apiKey: "AIzaSyDTeDP3tD-qLJcdZrMbek-VSp87XapKPHA",
    authDomain: "supermarket-react.firebaseapp.com",
    databaseURL: "https://supermarket-react.firebaseio.com",
    projectId: "supermarket-react",
    storageBucket: "supermarket-react.appspot.com",
    messagingSenderId: "635046131505"
  };
  firebase.initializeApp(config);

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
