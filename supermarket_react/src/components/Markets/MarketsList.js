import React from 'react'

class MarketsList extends React.Component {
	state = {
		markets: []
	};
	componentDidMount() {
		fetch("markets.json")
			.then(resp => resp.json())
			.then(markets => this.setState({ markets }));
	}
	render() {
		return <h1>Markets</h1>
	}
}
export default MarketsList;