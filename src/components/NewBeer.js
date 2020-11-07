import React, { Component } from 'react';
import axios from 'axios';

export default class NewBeer extends Component {

	state = {
		name: '',
		tagline: '',
		description: '',
		first_brewed: '',
		brewers_tips: '',
		attenuation_level: 0,
		contributed_by: ''
	}

	changeHandler = (e) => {
		const { name, value } = e.target;
		this.setState({[name]: value})
	}

	submitHandler = (e) => {
		e.preventDefault();
		console.log('SUBMIT STATE :', this.state);
		axios.post("https://ih-beers-api2.herokuapp.com/beers/new",
			{
				name: this.state.name,
				tagline: this.state.tagline,
			})
		.then(res => {
			console.log('SUBMIT RESPONSE :', res);
		})
		.catch(err => {
			console.log(err);
		})
	}

	render() {
		return (
			<div>
				<form method='post'>
					<label htmlFor="name">Name</label>
					<input onChange={(e) => this.changeHandler(e)} type="text" name="name" />
					<hr/>
					<label htmlFor="tagline">Tagline</label>
					<input onChange={(e) => this.changeHandler(e)} type="text" name="tagline" />
					<hr />
					<button onClick={(e) => this.submitHandler(e)} type="submit">Add New Beer</button>
				</form>
			</div>
		)
	}
}
