import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

const Content = styled.div`
	width: 100%;
	height: 100vh;
	background: lightcyan;
`;

const MainContent = () => {
	return (
		<Content>
			<Route path="/home" component={() => <h1>Home</h1>} />
			<Route path="/user-panel" component={() => <h1>User Panel</h1>} />
			<Route path="/markets" component={() => <h1>Markets</h1>} />
			<Route path="/basket" component={() => <h1>Basket</h1>} />
			<Route path="/summary-order" component={() => <h1>Summary the order</h1>}
			/>
		</Content>
	);
};

export default MainContent;
