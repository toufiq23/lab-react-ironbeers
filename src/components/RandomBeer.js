import React, { Component } from 'react'

export default class RandomBeer extends Component {
	state = {
		randomBeer: ''
	}

	Random_Beer = 'https://ih-beers-api2.herokuapp.com/beers/random'

	componentDidMount(){
		fetch(this.Random_Beer)
		.then(res => {
			return res.json()
		})
		.then(data => {
			console.log('random ;', data);
			this.setState({
				randomBeer: data
			})
		})
	}

	render() {
		if(this.state.randomBeer.length < 1){
			return <h2>Loading...</h2>
		}
		return (
			<div>
				<img src="{`${this.state.randomBeer.image_url}`}" alt=""/>
				<div>{this.state.randomBeer.name}</div>
				<div>{this.state.randomBeer.tagline}</div>
				<div>{this.state.randomBeer.first_brewed}</div>
				<div>{this.state.randomBeer.attenuation_level}</div>
				<div>{this.state.randomBeer.description}</div>
				<div>{this.state.randomBeer.contributed_by}</div>
			</div>
		)
	}
}
