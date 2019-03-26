import React from 'react'
import { Icon as BaseIcon } from "react-icons-kit";
import { user } from "react-icons-kit/ikons/user";
import { shop } from "react-icons-kit/ikons/shop";
import { shoppingCart } from "react-icons-kit/fa/shoppingCart";
import {u1F6A9} from 'react-icons-kit/noto_emoji_regular/u1F6A9'

import "./Home.css"
import styled from "styled-components";


const Icon = props => <BaseIcon size={100} icon={props.icon} />;
const IconCnt = styled.div`
    color: #0cadad;
	display: flex;
	justify-content: center;
`;

class Home extends React.Component {
    render(){
        return(
            <div className="Home__container">
                <div className="Home__container__header">
                    <h1>React</h1>
                    <p>Supermarket</p>
                </div>
                <div className="Home__container__info">
                    <div className="Home__container__info__panel">
                        <IconCnt>
							<Icon icon={user} />
						</IconCnt>
                        <p>Sign up</p>
                    </div>
                    <div className="Home__container__info__panel">
                        <IconCnt>
							<Icon icon={shop} />
						</IconCnt>
                        <p>Find your market</p>
                    </div>
                    <div className="Home__container__info__panel">
                        <IconCnt>
							<Icon icon={shoppingCart} />
						</IconCnt>
                        <p>Do shopping</p>
                    </div>
                    <div className="Home__container__info__panel">
                        <IconCnt>
						    <Icon icon={u1F6A9} />
						</IconCnt>
                        <p>Wait for delivery!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home