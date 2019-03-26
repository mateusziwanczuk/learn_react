import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../Home/Home"
import UserPanel from "../UserPanel/UserPanel"
import Markets from "../Markets/Markets"
import Basket from "../Basket/Basket"
import Summary from "../Summary/Summary"

const Content = styled.div`
	background: url("/img/background.jpg");
	background-size: cover;
	height: 100vh;
	width: 100%;
`;

const MainContent = () => {
	return (
		<Content>
			<Route exact path="/" component={ Home } />
			<Route path="/home" component={ Home } />
			<Route path="/user-panel" component={ UserPanel } />
			<Route path="/markets" component={ Markets } />
			<Route path="/basket" component={ Basket } />
			<Route path="/summary-order" component={ Summary } />
		</Content>
	);
};

export default MainContent;
