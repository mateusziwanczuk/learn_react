import React from "react";
import { Link } from "react-router-dom";
import { SideNav, Nav as BaseNav } from "react-sidenav";
import { Icon as BaseIcon } from "react-icons-kit";
import { home } from "react-icons-kit/ikons/home";
import { user } from "react-icons-kit/ikons/user";
import { shop } from "react-icons-kit/ikons/shop";
import { shoppingCart } from "react-icons-kit/fa/shoppingCart";
import { creditCardAlt } from "react-icons-kit/fa/creditCardAlt";
import { bubbles3 } from 'react-icons-kit/icomoon/bubbles3';
import { userTimes } from 'react-icons-kit/fa/userTimes';

import styled from "styled-components";

const Navigation = styled.div`
	background: #0cadad;
	color: #fff;
	font-size: 1rem;
	height: 100vh;
	letter-spacing: 3px;
	line-height: 16px;
	width: 160px;
`;

const IconCnt = styled.div`
	display: flex;
	justify-content: center;
`;

const Nav = styled(BaseNav)`
	padding: 0;
`;

const theme = {
	hoverBgColor: "#0c8383",
	selectionBgColor: "#086464"
};

const Text = styled.div`
	font-size: 1rem;
	margin-top: 3px;
	text-align: center;
	text-transform: uppercase;
`;

const NavLink = styled(Link)`
	color: #fff;
	padding: 8px 12px;
	text-decoration: none;
	width: 100%;
`;

const Icon = props => <BaseIcon size={36} icon={props.icon} />;

class MainNav extends React.Component {
	state = { selectedPath: "home" };

	onItemSelection = arg => {
		this.setState({ selectedPath: arg.path });
	};

	render() {
		return (
			<Navigation>
				<SideNav
					defaultSelectedPath="home"
					theme={theme}
					onItemSelection={this.onItemSelection}
				>
					<NavLink to="/">
						<div style={{margin: "30px 0 10px", textAlign: "center"}}>
							<h1 style={{fontSize: "4rem", fontFamily: 'Courgette'}}>React</h1>
							<h5 style={{fontSize: "0.7rem", fontFamily: 'Roboto', letterSpacing: "0.6rem", marginTop: "10px"}}>SUPERMARKET</h5>
						</div>
					</NavLink>
					<Nav id="home">
						<NavLink to="/home">
							<IconCnt>
								<Icon icon={home} />
							</IconCnt>
							<Text>Home</Text>
						</NavLink>
					</Nav>
					<Nav id="userPanel">
						<NavLink to="/user-panel">
							<IconCnt>
								<Icon icon={user} />
							</IconCnt>
							<Text>User Panel</Text>
						</NavLink>
					</Nav>
					<Nav id="markets">
						<NavLink to="/markets">
							<IconCnt>
								<Icon icon={shop} />
							</IconCnt>
							<Text>Markets</Text>
						</NavLink>
					</Nav>
					<Nav id="basket">
						<NavLink to="/basket">
							<IconCnt>
								<Icon icon={shoppingCart} />
							</IconCnt>
							<Text>Basket</Text>
						</NavLink>
					</Nav>
					<Nav id="summary">
						<NavLink to="/summary-order">
							<IconCnt>
								<Icon icon={creditCardAlt} />
							</IconCnt>
							<Text>Summary the order</Text>
						</NavLink>
					</Nav>


					<Nav id="support">
						<NavLink to="/support">
							<IconCnt>
								<Icon icon={bubbles3} />
							</IconCnt>
							<Text>Support</Text>
						</NavLink>
					</Nav>
					<Nav id="logout">
						<NavLink to="/logout"> 
							<IconCnt>
								<Icon icon={userTimes} />
							</IconCnt>
							<Text>Log out</Text>
						</NavLink>
					</Nav>
				</SideNav>
			</Navigation>
		);
	}
}

export default MainNav;
