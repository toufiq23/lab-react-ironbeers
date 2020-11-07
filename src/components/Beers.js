import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import OneBeer from './OneBeer';

const All_Beer = 'https://ih-beers-api2.herokuapp.com/beers';

export default class Beers extends Component {
	state = {
		beers: '',
	};

	componentDidMount(){
		fetch(All_Beer)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				this.setState({
					beers: data,
				})
			})
	}

	render(){
		console.log('this.state.beers : ', this.state.beers);
		if (this.state.beers.length < 1){
			return <h2>Loading...</h2>
		}
		return(
			<div>
			{this.state.beers.map((el) => (
				<div style={{display: "flex"}} key={el._id}>
					<div className="image">
						<img src={el.image_url} alt="image"/>
					</div>
					<div>
						<div>{el.name}</div>
						<div>{el.tagline}</div>
						<div>{el.contributed_by}</div>
						<Link to={`/beers/${el._id}`}>Open the beer details</Link>
					</div>
				</div>
			))}
		</div>
		)
	}
}