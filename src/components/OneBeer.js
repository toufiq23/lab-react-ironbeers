import React, { Component } from 'react'

export default class OneBeer extends Component {

	state = {
		oneBeer: ''
	}

	One_Beer = `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`

	componentDidMount = () => {
		console.log('componentDidMount', this.One_Beer)
		fetch(this.One_Beer)
		.then(res => {
			return res.json()
		})
		.then((data) => {
			console.log('ONEBEER :', data);
			this.setState({
				oneBeer: data
			})
		})
	}

	render() {
		if(this.state.oneBeer < 1){
			return <h2>Loading...</h2>
		}
		return (
			<div>
				<img src={`${this.state.oneBeer.image_url}`} alt="image"/>
				<div>{this.state.oneBeer.name}</div>
				<div>{this.state.oneBeer.tagline}</div>
				<div>{this.state.oneBeer.first_brewed}</div>
				<div>{this.state.oneBeer.attenuation_level}</div>
				<div>{this.state.oneBeer.description}</div>
				<div>{this.state.oneBeer.contributed_by}</div>
			</div>
		)
	}
}
